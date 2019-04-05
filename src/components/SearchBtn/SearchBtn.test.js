import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import { shallowToJson } from 'enzyme-to-json'
import SearchBtn from './index'

Enzyme.configure({ adapter: new Adapter() })

/* eslint-disable */
describe('SearBtn', () => {
  let wrapper

  it('[render without crashing]', () => {
    wrapper = shallow(<SearchBtn onClick={f => f}  />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})