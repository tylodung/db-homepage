import React from "react"
import PropTypes from "prop-types"
import Icon from "@fortawesome/react-fontawesome"
import { Grid, Row, Col } from "react-flexbox-grid"

import styles from "./index.module.css"

const SkillsList = ({ servicesPrimary, servicesSecondary }) => (
  <Grid className={styles.root}>
    <Row>
      <Col xs={12}>
        <h3>Key Services & Skills</h3>
      </Col>
    </Row>
    <Row>
      <Col xs={12} md={6}>
        <ul>
          {servicesPrimary.map(skill => (
            <li key={skill}>
              <Icon icon="check-square" /> {skill}
            </li>
            ))}
        </ul>
      </Col>
      <Col xs={12} md={6}>
        <ul>
          {servicesSecondary.map(skill => (
            <li key={skill}>
              <Icon icon="check-square" /> {skill}
            </li>
            ))}
        </ul>
      </Col>
    </Row>
  </Grid>
)

SkillsList.propTypes = {
  servicesPrimary: PropTypes.array.isRequired,
  servicesSecondary: PropTypes.array.isRequired,
}


export default SkillsList
