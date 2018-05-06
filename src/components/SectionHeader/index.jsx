import React from "react"
import PropTypes from "prop-types"

import styles from "./index.module.css"

const SectionHeader = ({
  type, headingCopy, taglineCopy, smallHeader, smallLead,
}) => (
  <div className={styles.root}>
    { type === `h1` && <h1>{ headingCopy }</h1> }
    { type === `h2` && <h2 className={smallHeader ? styles.smallHeader : null}>{ headingCopy }</h2> }
    <hr className={styles.divider} />
    <p className={smallLead ? styles.smallLead : styles.lead}>
      { taglineCopy }
    </p>
  </div>
)

SectionHeader.propTypes = {
  type: PropTypes.node.isRequired,
  headingCopy: PropTypes.string.isRequired,
  taglineCopy: PropTypes.string.isRequired,
  smallHeader: PropTypes.bool,
  smallLead: PropTypes.bool,
}

SectionHeader.defaultProps = {
  smallHeader: false,
  smallLead: false,
}

export default SectionHeader
