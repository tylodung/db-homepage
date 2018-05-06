import React from "react"
import PropTypes from "prop-types"
import { Grid, Row, Col } from "react-flexbox-grid"
import Img from "gatsby-image"

import PageMeta from "../components/PageMeta"
import SectionHeader from "../components/SectionHeader"
import ProjectDetails from "../components/ProjectDetails"

const ProjectDetailTemplate = ({ data }) => {
  const post = data.project

  return (
    <Grid fluid>
      <PageMeta page={post.frontmatter} />

      <SectionHeader
        headingCopy={post.frontmatter.title}
        type="h1"
        taglineCopy={post.frontmatter.type || `Web development project.`}
      />

      <Row>
        <Col xs={12} xl={9}>
          <div style={{ padding: `5px`, border: `2px solid #f8f8f8`, marginBottom: `20px` }}>
            <Img sizes={post.frontmatter.full.childImageSharp.sizes} />
          </div>
        </Col>
        <Col xs={12} xl={3}>
          <ProjectDetails project={post.frontmatter} description={post.html} />
        </Col>
      </Row>
    </Grid>
  )
}

ProjectDetailTemplate.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
}

export default ProjectDetailTemplate

export const pageQuery = graphql`
  query ProjectsByPath($path: String!) {

    project: markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        metaTitle
        metaDescription
        excerpt
        technology
        date
        type
        agency
        client
        link
        full {
          childImageSharp {
            sizes(maxWidth: 1000, quality: 80) {
              ...GatsbyImageSharpSizes_withWebp_tracedSVG
            }
          }
        }

      }
    }

  }
`
