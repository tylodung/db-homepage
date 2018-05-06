import React from "react"
import PropTypes from "prop-types"
import { Grid, Row, Col } from "react-flexbox-grid"
import Img from "gatsby-image"
import Icon from "@fortawesome/react-fontawesome"

import styles from "./index.module.css"

const BioCard = ({ avatar, col1, col2 }) => (
  <Grid fluid>
    <Row>
      <Col xs={12} md={12} xl={2} xlOffset={1}>
        <div className={styles.avatar}>
          <Img resolutions={avatar} alt="David Brookes" />
        </div>
        <p className={styles.social}>
          <a
            style={{ color: `#000` }}
            href="https://github.com/dbrookes"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="David Brookes on GitHub"
          >
            <Icon icon={[`fab`, `github`]} size="lg" fixedWidth />
          </a>
          <a
            style={{ color: `#000` }}
            href="https://linkedin.com/in/dbrookes"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="David Brookes on LinkedIn"
          >
            <Icon icon={[`fab`, `linkedin`]} size="lg" fixedWidth />
          </a>
          <a
            style={{ color: `#000` }}
            href="https://angel.co/dbrookes"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="David Brookes on AngelList"
          >
            <Icon icon={[`fab`, `angellist`]} size="lg" fixedWidth />
          </a>
          <a
            style={{ color: `#000` }}
            href="https://twitter.com/_dbrookes"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="David Brookes on Twitter"
          >
            <Icon icon={[`fab`, `twitter`]} size="lg" fixedWidth />
          </a>
        </p>
      </Col>
      <Col xs={12} md={6} xl={3}>
        <div style={{ textAlign: `justify` }} dangerouslySetInnerHTML={{ __html: col1 }} />
      </Col>
      <Col xs={12} md={6} xl={3}>
        <div style={{ textAlign: `justify` }} dangerouslySetInnerHTML={{ __html: col2 }} />
      </Col>
    </Row>
  </Grid>
)

BioCard.propTypes = {
  avatar: PropTypes.object.isRequired,
  col1: PropTypes.string.isRequired,
  col2: PropTypes.string.isRequired,
}

export default BioCard
