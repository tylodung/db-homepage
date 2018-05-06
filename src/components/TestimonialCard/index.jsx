import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import Icon from "@fortawesome/react-fontawesome"

import styles from "./index.module.css"

const TestimonialCard = ({ post, index }) => {
  const testimonial = post.node.frontmatter
  return (
    <div className={index === 2 ? `${styles.root} ${styles.third}` : styles.root}>
      <blockquote>
        <Img resolutions={testimonial.thumb.childImageSharp.resolutions} />
        {testimonial.linkedIn &&
          <a
            style={{ color: `#2b2b2d` }}
            href={testimonial.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${testimonial.title} on LinkedIn`}
          >
            <Icon icon={[`fab`, `linkedin`]} fixedWidth />
          </a>
        }
        {testimonial.twitter &&
          <a
            style={{ color: `#2b2b2d` }}
            href={testimonial.twitter}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${testimonial.title} on Twitter`}
          >
            <Icon icon={[`fab`, `twitter`]} fixedWidth />
          </a>
        }
        {testimonial.angellist &&
          <a
            style={{ color: `#2b2b2d` }}
            href={testimonial.angellist}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${testimonial.title} on AngelList`}
          >
            <Icon icon={[`fab`, `angellist`]} fixedWidth />
          </a>
        }

        <div dangerouslySetInnerHTML={{ __html: post.node.html }} />
        <cite>
          {testimonial.title} - {testimonial.jobTitle}
        </cite>
      </blockquote>
    </div>
  )
}

TestimonialCard.propTypes = {
  post: PropTypes.object.isRequired,
  index: PropTypes.number,
}

TestimonialCard.defaultProps = {
  index: 0,
}

export default TestimonialCard
