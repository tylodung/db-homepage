import React from "react"
import PropTypes from "prop-types"

import "typeface-montserrat"
import "typeface-merriweather"
import "../components/Icons"

import Header from "../components/Header"
import Footer from "../components/Footer"
import Sidebar from "../components/Sidebar"

import "../css/global.css"
import styles from "./index.module.css"

class Template extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isOpen: false }
    this.handleSidebar = this.handleSidebar.bind(this)
    this.handleViewportChange = this.handleViewportChange.bind(this)
  }

  componentDidMount() {
    if (matchMedia) window.matchMedia(`(max-width: 760px)`).addListener(this.handleViewportChange)
  }

  handleSidebar(direction = `toggle`) {
    if (direction === `close`) {
      this.setState({
        isOpen: false,
      })
    } else {
      this.setState({
        isOpen: !this.state.isOpen,
      }, () => {
        if (this.state.isOpen) {
          const closeZone = document.getElementsByClassName(styles.dimmer)[0]

          const closeMe = () => {
            this.setState({ isOpen: false }, () => {
              closeZone.removeEventListener(`touchend`, () => closeMe())
              closeZone.removeEventListener(`mouseup`, () => closeMe())
            })
          }

          closeZone.addEventListener(`touchend`, () => closeMe())
          closeZone.addEventListener(`mouseup`, () => closeMe())
        }
      })
    }
  }

  handleViewportChange() {
    this.setState({
      isOpen: false,
    })
  }

  render() {
    return (
      <div className={styles.layout}>
        <Header isOpen={this.state.isOpen} navToggle={this.handleSidebar} />
        <main id="content" className={`${this.state.isOpen ? styles.dimmer : ``} ${styles.content}`}>
          { this.props.children() }
        </main>
        <Sidebar isOpen={this.state.isOpen} navToggle={this.handleSidebar} />
        <Footer />
      </div>
    )
  }
}

Template.propTypes = {
  children: PropTypes.func.isRequired,
}

export default Template
