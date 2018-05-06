import React from "react"
import PropTypes from "prop-types"
import Icon from "@fortawesome/react-fontawesome"

import styles from "./index.module.css"

const Alert = ({ message, description, type }) => (
  <div className={`${styles.root} ${styles[type]}`} role="alert">
    <h3><Icon icon={type === `error` ? `exclamation-circle` : `check-circle`} fixedWidth /> {message}</h3>
    <p>{description}</p>
  </div>
)

Alert.propTypes = {
  type: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default Alert
