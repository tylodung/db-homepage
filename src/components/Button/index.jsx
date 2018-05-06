import React from "react"
import PropTypes from "prop-types"

import styles from "./index.module.css"

const Button = props => (
  <button className={styles.button} {...props}>
    { props.children }
  </button>
)

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

Button.defaultProps = {
  type: `button`,
}

export default Button
