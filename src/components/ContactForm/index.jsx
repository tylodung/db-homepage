import React from "react"
import { Grid, Row, Col } from "react-flexbox-grid"
import Formsy from "formsy-react"

import Input from "../Input"
import Textarea from "../Textarea"
import Select from "../Select"
import Button from "../Button"

import styles from "./index.module.css"

import Alert from "../Alert"
import SectionHeader from "../SectionHeader"

class ContactForm extends React.Component {
  constructor() {
    super()

    this.handleEnable = this.handleEnable.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInvalid = this.handleInvalid.bind(this)
    this.state = { canSubmit: true, success: false }
  }

  handleEnable() {
    this.setState({ canSubmit: true })
  }

  handleInvalid() {
    this.setState({ invalid: true, canSubmit: false })
  }

  handleSubmit(model) {
    this.setState({
      invalid: false,
    })

    fetch(`${process.env.API_URL}/contact`, {
      method: `post`,
      body: JSON.stringify(model),
    }).then(() => {
      this.setState({
        success: true,
      }, () => {
        window.dataLayer = window.dataLayer || []
        window.dataLayer.push({
          event: `contactForm`,
        })
      })
    })
  }

  render() {
    return (
      <Grid fluid>
        <SectionHeader
          smallHeader
          smallLead
          headingCopy="Project Enquiry"
          type="h2"
          taglineCopy="Please ensure to include as much information about the project as possible as well as any budgets and timelines."
        />

        <Row>
          <Col xs={12} md={12} lg={6} lgOffset={3}>
            {this.state.invalid &&
              <Alert
                message="Oops"
                description="Please ensure all required fields below are completed and try again."
                type="error"
              />
            }

            {this.state.success &&
              <Alert
                message="Success"
                description="Your message was successfully sent, I'll get back to you as soon as possible."
                type="success"
              />
            }
          </Col>
        </Row>

        {!this.state.success &&
          <Row>
            <Col xs={12} md={12} lg={8} xl={6} lgOffset={2} xlOffset={3}>
              <Formsy
                onValidSubmit={this.handleSubmit}
                onInvalidSubmit={this.handleInvalid}
                onValid={this.handleEnable}
                className={styles.form}
              >

                <Row>
                  <Col xs={12} md={6}>
                    <Input
                      name="name"
                      title="Your Name"
                      validations="minLength:2"
                      validationError="Please provide your name."
                      required
                    />
                  </Col>
                  <Col xs={12} md={6}>
                    <Input
                      name="email"
                      title="Your Email"
                      validations="isEmail"
                      validationError="Please provide a valid email address."
                      required
                    />
                  </Col>
                  <Col xs={12} md={6}>
                    <Input
                      name="company"
                      title="Company"
                    />
                  </Col>
                  <Col xs={12} md={6}>
                    <Select
                      name="type"
                      title="Enquiry Type"
                      validationError="Please select an enquiry type."
                      options={[
                        { title: `Freelance`, value: `freelance` },
                        { title: `Contact Opportunity`, value: `contract` },
                        { title: `Other`, value: `other` },
                      ]}
                      value="freelance"
                    />
                  </Col>
                </Row>
                <Textarea
                  name="message"
                  title="Message"
                  rows={10}
                  validations="minLength: 10"
                  validationError="Please enter a message of at least 10 characters."
                  required
                />

                <Button type="submit" disabled={!this.state.canSubmit}>
                  Send Message
                </Button>
              </Formsy>
            </Col>
          </Row>
        }

      </Grid>
    )
  }
}

export default ContactForm
