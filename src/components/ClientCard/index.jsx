import React from "react"
import PropTypes from "prop-types"

import styles from "./index.module.css"

const ClientCard = ({ client }) => (
  <div className={styles.client}>
    <img src={client.logo} alt={client.title} />
  </div>)

ClientCard.propTypes = {
  client: PropTypes.object.isRequired,
}

export default ClientCard
