import React from "react"
import PropTypes from "prop-types"
import { Grid } from "react-flexbox-grid"
import Icon from "@fortawesome/react-fontawesome"

import PageMeta from "../../components/PageMeta"
import SectionHeader from "../../components/SectionHeader"
import ContactForm from "../../components/ContactForm"

const Contact = ({ data }) => {
  const post = data.page

  return (
    <Grid fluid>
      <PageMeta page={post.frontmatter} />

      <SectionHeader headingCopy={post.frontmatter.title} type="h1" taglineCopy={post.frontmatter.tagline} />

      <ContactForm />

      <SectionHeader
        smallHeader
        smallLead
        headingCopy="Connect"
        type="h2"
        taglineCopy="Other places to find me."
      />

      <p style={{ textAlign: `center` }}>
        <a style={{ color: `#2b2b2d` }} href="https://github.com/dbrookes" target="_blank" rel="noopener noreferrer">
          <Icon icon={[`fab`, `github`]} size="3x" fixedWidth />
        </a>
        <a style={{ color: `#2b2b2d` }} href="https://linkedin.com/in/dbrookes" target="_blank" rel="noopener noreferrer">
          <Icon icon={[`fab`, `linkedin`]} size="3x" fixedWidth />
        </a>
        <a style={{ color: `#2b2b2d` }} href="https://angel.co/dbrookes" target="_blank" rel="noopener noreferrer">
          <Icon icon={[`fab`, `angellist`]} size="3x" fixedWidth />
        </a>
        <a style={{ color: `#2b2b2d` }} href="https://twitter.com/_dbrookes" target="_blank" rel="noopener noreferrer">
          <Icon icon={[`fab`, `twitter`]} size="3x" fixedWidth />
        </a>
      </p>

    </Grid>
  )
}

export default Contact

Contact.propTypes = {
  data: PropTypes.object.isRequired,
}

export const pageQuery = graphql`
  query ContactPage($path: String!) {
    page: markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        title
        path
        metaTitle
        metaDescription
        tagline
      }
    }
  }
`
