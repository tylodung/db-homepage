import React from "react"
import { shallow } from "enzyme"
import BioCard from "./"

describe(`Alert`, () => {
  let props
  let mountedComponent
  const wrapper = () => {
    if (!mountedComponent) {
      mountedComponent = shallow(<BioCard {...props} />)
    }
    return mountedComponent
  }

  beforeEach(() => {
    props = {
      avatar: {
        tracedSVG: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cpath d='M.4 4.8c.7 5.3.7 4.6 0 16.4-.5 8-.4 8.7 1.1 8.2 1.6-.6 1.6-.5.1 2.4-1.7 3.4-2.1 7.8-.7 8.6 1.6 1 4.3-2 4.6-5.2 0-1.8.5-3.5.9-3.9 1-1 .7-2.5-.3-1.9-1.7 1.1-2.9-2-2.8-7.7 0-4 .4-6 1.3-6.4 1.1-.4 1.1-1 0-3.9C3.1 8.2 3.1 8 5.1 8 6.9 8 7 7.8 6 6.5c-.9-1-.9-1.5-.1-1.5.6 0 1.1.5 1.1 1.1 0 .8.5.8 1.5-.1s1.5-.9 1.5-.1c0 .6.8 1 1.8 1 1.5 0 1.5 0 .2-1s-1.3-1 0-.6c.8.2 2-.3 2.7-1.2 1-1.4`,
        width: 100,
        height: 100,
        src: `/static/avatar-326107becdd7a2a7136fedd0fcd23031-fe715.webp`,
        srcSet: `/static/avatar-326107becdd7a2a7136fedd0fcd23031-fe715.webp 1x,\n/static/avatar-326107becdd7a2a7136fedd0fcd23031-961e0.webp 1.5x,\n/static/avatar-326107becdd7a2a7136fedd0fcd23031-56410.webp 2x`,
        srcWebp: `/static/avatar-326107becdd7a2a7136fedd0fcd23031-fe715.webp`,
        srcSetWebp: `/static/avatar-326107becdd7a2a7136fedd0fcd23031-fe715.webp 1x,\n/static/avatar-326107becdd7a2a7136fedd0fcd23031-961e0.webp 1.5x,\n/static/avatar-326107becdd7a2a7136fedd0fcd23031-56410.webp 2x`,
      },
      col1: `Alert error title`,
      col2: `This is the alert body text`,
    }
    mountedComponent = undefined
  })

  it(`renders a BioCard correctly`, () => {
    expect(wrapper()).toMatchSnapshot()
  })
})
