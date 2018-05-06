import React from "react"
import PropTypes from "prop-types"

import styles from "./index.module.css"

const Intro = ({ title, intro }) => (
  <div className={styles.intro}>
    <h1>{ title }</h1>
    <p>{ ` - ${intro}` }</p>
  </div>
)

Intro.propTypes = {
  title: PropTypes.string.isRequired,
  intro: PropTypes.string.isRequired,
}

export default Intro
