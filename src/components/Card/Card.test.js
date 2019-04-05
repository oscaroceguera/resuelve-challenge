import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import { shallowToJson } from 'enzyme-to-json'
import Card from './index'

Enzyme.configure({ adapter: new Adapter() })

const DATA = {
  'id': '67405111-37a5-438f-81cc-4666af60c800',
  'title': 'The Wind Rises',
  'description': 'The son of a sailor,5-year old. One fateful day',
  'director': 'Hayao Miyazaki',
  'producer': 'Toshio Suzuki',
  'release_date': '2013',
  'rt_score': '89',
  'people': [
    'https://ghibliapi.herokuapp.com/people/'
  ],
  'species': [
    'https://ghibliapi.herokuapp.com/species/af3910a6dfe1c4aa04f2'
  ],
  'locations': [
    'https://ghibliapi.herokuapp.com/locations/'
  ],
  'vehicles': [
    'https://ghibliapi.herokuapp.com/vehicles/'
  ],
  'url': 'https://ghibliapi.herokuapp.com/films/67405111-37a5-438f-81cc'
}

/* eslint-disable */
describe('Card', () => {
  let wrapper

  it('[render without crashing]', () => {
    wrapper = shallow(<Card data={DATA} />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})