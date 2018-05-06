import React from "react"
import { shallow } from "enzyme"
import ContactForm from "./"

describe(`ContactForm`, () => {
  let props
  let mountedComponent
  const wrapper = () => {
    if (!mountedComponent) {
      mountedComponent = shallow(<ContactForm {...props} />)
    }
    return mountedComponent
  }

  beforeEach(() => {
    props = {}
    mountedComponent = undefined
  })

  it(`renders a ContactForm`, () => {
    expect(wrapper()).toMatchSnapshot()
  })
})
