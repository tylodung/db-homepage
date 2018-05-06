import React from "react"
import PropTypes from "prop-types"
import Link from "gatsby-link"
import { slide as Menu } from 'react-burger-menu'

import styles from "./index.module.css"

const Sidebar = ({ isOpen, navToggle }) => (
  <Menu
    pageWrapId="content"
    className={styles.sideBar}
    isOpen={isOpen}
    right
    customBurgerIcon={false}
    customCrossIcon={false}
  >
    <nav className={styles.menu}>
      <ul>
        <li><Link activeClassName="active" onClick={navToggle} to="/about/">About</Link></li>
        <li><Link activeClassName="active" onClick={navToggle} to="/projects/">Projects</Link></li>
        <li><Link activeClassName="active" onClick={navToggle} to="/services/">Services</Link></li>
        <li><Link activeClassName="active" onClick={navToggle} to="/contact/">Contact</Link></li>
      </ul>
    </nav>
  </Menu>
)

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  navToggle: PropTypes.func.isRequired,
}

export default Sidebar
