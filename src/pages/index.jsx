import React from "react"
import PropTypes from "prop-types"
import { Grid, Row, Col } from "react-flexbox-grid"

import PageMeta from "../components/PageMeta"
import Intro from "../components/Intro"
import SectionHeader from "../components/SectionHeader"
import ProjectCard from "../components/ProjectCard"
import ButtonTo from "../components/ButtonTo"
import ClientCard from "../components/ClientCard/index"
import TestimonialCard from "../components/TestimonialCard"
import SkillsList from "../components/SkillsList"
import CadburyLogo from "../components/svg/clients/cadbury-logo.svg"
import DeloitteLogo from "../components/svg/clients/deloitte-logo.svg"
import HMGovernmentLogo from "../components/svg/clients/hm-government-logo.svg"
import FordLogo from "../components/svg/clients/ford-logo.svg"

const Homepage = ({ data }) => {
  const post = data.page
  const featuredProjects = data.featuredProjects.edges
  const featuredTestimonials = data.featuredTestimonials.edges

  const clientsList = post.frontmatter.allClients
  const clients = [
    { title: clientsList[0], logo: CadburyLogo },
    { title: clientsList[1], logo: DeloitteLogo },
    { title: clientsList[2], logo: HMGovernmentLogo },
    { title: clientsList[3], logo: FordLogo },
  ]

  return (
    <Grid fluid>
      <PageMeta page={post.frontmatter} />
      <Intro title={post.frontmatter.title} intro={post.frontmatter.intro} />

      <SectionHeader
        headingCopy="Featured Projects"
        type="h2"
        taglineCopy="Selected website and application builds."
      />

      <Row>
        {featuredProjects.map((project, index) => (
          <ProjectCard
            project={project}
            headingLevel={3}
            index={index}
            key={project.node.frontmatter.title}
          />
        ))}
      </Row>

      <Row center="xs" end="md">
        <Col xs={12}>
          <ButtonTo to="/projects/">More Projects</ButtonTo>
        </Col>
      </Row>

      <SectionHeader
        headingCopy="Services"
        type="h2"
        taglineCopy="Companies hire me to build cutting-edge web experiences for big-name clients."
      />

      <Row>
        <Col xs={12} lg={6}>
          <SkillsList
            servicesPrimary={post.frontmatter.servicesPrimary}
            servicesSecondary={post.frontmatter.servicesSecondary}
          />
        </Col>

        <Col xs={12} lg={6}>
          <h3>Web Development</h3>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </Col>
      </Row>

      <Row center="xs" end="md">
        <Col>
          <ButtonTo to="/services/">More service details</ButtonTo> <ButtonTo to="/contact/">Get in touch</ButtonTo>
        </Col>
      </Row>

      <SectionHeader
        headingCopy="Testimonials"
        type="h2"
        taglineCopy="What clients say."
      />

      <Row>
        {featuredTestimonials.map((testimonial, index) => (
          <Col xs={12} md={6} lg={4} key={testimonial.node.id}>
            <TestimonialCard post={testimonial} index={index} />
          </Col>
        ))}
      </Row>

      <SectionHeader
        headingCopy="Clients"
        type="h2"
        taglineCopy="Brands and organisations I've produced work for."
      />

      <Row>
        {clients.map(client => (
          <Col xs={12} md={6} lg={3} key={client.title}>
            <ClientCard client={client} />
          </Col>
        ))}
      </Row>

    </Grid>
  )
}

export default Homepage

Homepage.propTypes = {
  data: PropTypes.object.isRequired,
}

export const pageQuery = graphql`
  query Homepage($path: String!) {

    page: markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html
      frontmatter {
        title
        path
        metaTitle
        metaDescription
        intro
        servicesPrimary
        servicesSecondary
        allClients
      }
    }

    featuredProjects: allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}, limit: 3, filter: {frontmatter: {path: {regex: "^/projects/"}, featured: {eq: true}, draft: {ne: true}}}) {
      edges {
        node {
          id
          frontmatter {
            path
            featured
            title
            excerpt
            thumb {
              childImageSharp {
                sizes(maxWidth: 500, maxHeight: 360, quality: 80) {
                  ...GatsbyImageSharpSizes_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }

    featuredTestimonials: allMarkdownRemark(limit: 3, filter: {frontmatter: {type: {eq: "testimonial"}, featured: {eq: true}, draft: {ne: true}}}) {
      edges {
        node {
          id
          html
          frontmatter {
            title
            jobTitle
            thumb {
              childImageSharp {
                resolutions(width: 90, height: 90, quality: 80) {
                  ...GatsbyImageSharpResolutions_withWebp_tracedSVG
                }
              }
            }
            linkedIn
            twitter
            angellist
          }
        }
      }
    }

    featuredClients: allMarkdownRemark(limit: 4, filter: {frontmatter: {type: {eq: "clients"}, featured: {eq: true}, draft: {ne: true}}}) {
      edges {
        node {
          id
          frontmatter {
            title
            logo
          }
        }
      }
    }

  }
`
