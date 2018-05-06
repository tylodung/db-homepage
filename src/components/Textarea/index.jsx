import React from "react"
import { withFormsy, propTypes } from "formsy-react"

import styles from "./index.module.css"

class Textarea extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      blurred: false,
    }
    this.handleFocus = this.handleFocus.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
  }

  handleBlur() {
    this.setState({
      blurred: true,
    })
  }

  handleFocus() {
    this.setState({
      blurred: false,
    })
  }

  render() {
    const className = `form-group ${this.props.showError() ? `error` : ``}`
    const errorMessage = this.state.blurred ? this.props.getErrorMessage() : ``

    return (
      <div className={className}>
        <label htmlFor={this.props.name}>{this.props.title}
          <textarea
            className={styles.textarea}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            onChange={e => this.props.setValue(e.target.value)}
            name={this.props.name}
            type={this.props.type || `text`}
            value={this.props.getValue() || ``}
            rows={this.props.rows}
          />
        </label>
        <span className="validation-error">{errorMessage}</span>
      </div>
    )
  }
}

Textarea.propTypes = {
  ...propTypes,
}

export default withFormsy(Textarea)
