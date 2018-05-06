import React from "react"
import PropTypes from "prop-types"
import Link from "gatsby-link"

import styles from "./index.module.css"

const ButtonTo = props => (
  <Link className={styles.button} {...props}>
    { props.children }
  </Link>
)

ButtonTo.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

export default ButtonTo
