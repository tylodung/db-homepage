import React from "react"
import Link from "gatsby-link"
import { Grid, Row, Col } from "react-flexbox-grid"

import styles from "./index.module.css"

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className={styles.footer}>
      <Grid fluid>
        <Row>
          <Col xs={12}>
            <p>Made in London with React, GraphQL and AWS Serverless.</p>
            <p className={styles.copy}>
              {`Copyright © 2005 - ${currentYear} `}
              <Link to="/"><strong>David Brookes</strong></Link>
            </p>
          </Col>
        </Row>
      </Grid>
    </footer>
  )
}

export default Footer
