import React from "react"
import { shallow } from "enzyme"
import Alert from "./"

describe(`Alert`, () => {
  let props
  let mountedComponent
  const wrapper = () => {
    if (!mountedComponent) {
      mountedComponent = shallow(<Alert {...props} />)
    }
    return mountedComponent
  }

  beforeEach(() => {
    props = {
      type: `error`,
      message: `Alert error title`,
      description: `This is the alert body text`,
    }
    mountedComponent = undefined
  })

  it(`renders an Alert correctly`, () => {
    expect(wrapper()).toMatchSnapshot()
  })
})
