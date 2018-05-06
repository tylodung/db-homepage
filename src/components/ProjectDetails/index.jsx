import React from "react"
import PropTypes from "prop-types"
import { Grid, Row, Col } from "react-flexbox-grid"

import styles from "./index.module.css"

const ProjectDetails = ({ project, description }) => {
  const year = new Date(project.date).getFullYear()

  return (
    <Grid fluid className={styles.root}>
      <Row>
        <Col xs={12} md={8} xl={12}>
          <div dangerouslySetInnerHTML={{ __html: description }} />
        </Col>
        <Col xs={12} md={4} xl={12}>
          <h2>Technology</h2>
          <ul>
            {project.technology.map(tech => (
              <li key={tech}>{tech}</li>
              ))}
          </ul>
        </Col>
      </Row>

      <dl className={styles.meta}>
        {project.agency &&
          <span>
            <dt><strong>Agency:</strong></dt>
            <dd>{project.agency}</dd>
          </span>
        }
        {project.client &&
          <span>
            <dt><strong>Client:</strong></dt>
            <dd>{project.client}</dd>
          </span>
        }
        {project.date &&
          <span>
            <dt><strong>Year:</strong></dt>
            <dd>{year}</dd>
          </span>
        }
        {project.link &&
          <span>
            <dt><strong>Link:</strong></dt>
            <dd><a href={project.link} target="_blank" rel="noopener noreferrer">{project.link}</a></dd>
          </span>
        }
      </dl>
    </Grid>
  )
}

ProjectDetails.propTypes = {
  project: PropTypes.object.isRequired,
  description: PropTypes.string.isRequired,
}

export default ProjectDetails
