import React from "react"
import PropTypes from "prop-types"
import Icon from "@fortawesome/react-fontawesome"

import styles from "./index.module.css"

const ServiceCard = ({ post }) => {
  const serviceData = post.node

  return (
    <div className={styles.service}>
      <Icon icon={serviceData.frontmatter.icon} fixedWidth />
      <h2>{serviceData.frontmatter.title}</h2>
      <div dangerouslySetInnerHTML={{ __html: serviceData.html }} />
    </div>
  )
}

ServiceCard.propTypes = {
  post: PropTypes.object.isRequired,
}

export default ServiceCard
