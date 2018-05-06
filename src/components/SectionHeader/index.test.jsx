import React from "react"
import { shallow } from "enzyme"
import SectionHeader from "./"

describe(`SectionHeader`, () => {
  let props
  let mountedSectionHeader
  const lockScreen = () => {
    if (!mountedSectionHeader) {
      mountedSectionHeader = shallow(<SectionHeader {...props} />)
    }
    return mountedSectionHeader
  }

  beforeEach(() => {
    props = {
      type: `h1`,
      headingCopy: `Sample heading`,
      taglineCopy: `Sample tagline copy`,
      smallHeader: undefined,
      smallLead: undefined,
    }
    mountedSectionHeader = undefined
  })

  it(`always renders a h1 with the headingCopy text`, () => {
    expect(lockScreen().find(`h1`).text()).toBe(`Sample heading`)
  })

  it(`always renders a p with the taglineCopy text`, () => {
    expect(lockScreen().find(`p`).text()).toBe(`Sample tagline copy`)
  })

  describe(`when smallLead is true`, () => {
    beforeEach(() => {
      props.smallLead = true
    })

    it(`should render a p with a class of smallLead`, () => {
      expect(lockScreen().find(`p`).hasClass(`smallLead`)).toBe(true)
    })
  })

  describe(`when type is 'h2'`, () => {
    beforeEach(() => {
      props.type = `h2`
    })

    it(`should render a h2 instead of a h1`, () => {
      expect(lockScreen().find(`h2`).text()).toBe(`Sample heading`)
    })
  })

  describe(`when type is 'h2' and smallHeader is true`, () => {
    beforeEach(() => {
      props.type = `h2`
      props.smallHeader = true
    })

    it(`should render a h2 with a class of smallHeader`, () => {
      expect(lockScreen().find(`h2`).hasClass(`smallHeader`)).toBe(true)
    })
  })
})
