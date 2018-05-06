import React from "react"
import PropTypes from "prop-types"
import { withFormsy, propTypes } from "formsy-react"

class Input extends React.Component {
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
        <label htmlFor={this.props.name}>{this.props.title} { !this.props.required && <span className="optional">(optional)</span> }
          <input
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            onChange={e => this.props.setValue(e.target.value)}
            value={this.props.getValue() || ``}
            name={this.props.name}
            id={this.props.name}
            type={this.props.type}
          />
        </label>
        <span className="validation-error">{errorMessage}</span>
      </div>
    )
  }
}

Input.propTypes = {
  ...propTypes,
  type: PropTypes.string,
}

Input.defaultProps = {
  type: `text`,
}

export default withFormsy(Input)
