import React from "react"
import PropTypes from "prop-types"
import { Grid, Row, Col } from "react-flexbox-grid"

import PageMeta from "../../components/PageMeta"
import SectionHeader from "../../components/SectionHeader"
import ServiceCard from "../../components/ServiceCard"

const Services = ({ data }) => {
  const post = data.page
  const allServices = data.allServices.edges

  return (
    <Grid fluid>
      <PageMeta page={post.frontmatter} />

      <SectionHeader
        headingCopy={post.frontmatter.title}
        type="h1"
        taglineCopy={post.frontmatter.tagline}
      />

      <Row>
        {allServices.map(service => (
          <Col xs={12} md={6} lg={6} xl={4} key={service.node.id}>
            <ServiceCard post={service} />
          </Col>
        ))}
      </Row>

    </Grid>
  )
}

export default Services

Services.propTypes = {
  data: PropTypes.object.isRequired,
}

export const pageQuery = graphql`
  query ServicesPage($path: String!) {

    page: markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        title
        path
        metaTitle
        metaDescription
        tagline
      }
    }

    allServices: allMarkdownRemark(limit: 12, sort: { fields: [frontmatter___order], order: ASC }, filter: {frontmatter: {type: {eq: "service"}, draft: {ne: true}}}) {
      edges {
        node {
          html
          id
          frontmatter {
            title
            icon
          }
        }
      }
    }
  }
`
