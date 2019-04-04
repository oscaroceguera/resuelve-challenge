import React from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs, boolean, text, select } from '@storybook/addon-knobs'

import Autocomplete from '../src/components/Autocomplete'

const { label, options, defaultValue } = {
  label: 'Widths',
  options: {
    Small: 'Small',
    Medium: 'Medium',
    Large: 'Large',
    FullWidth: 'FullWidth'
  },
  defaultValue: 'Medium'
}

const DATA = [
  { id: '2baf70d1-42bb-4437-b551-e5fed5a87abe', desc: 'Castle in the Sky' },
  { id: '2cfb892-aac0-4c5b-94af-521852e46d6a', desc: 'Grave of the Fireflies' },
  { id: '58611129-2dbc-4a81-a72f-77ddfc1b1b49', desc: 'My Neighbor Totoro' },
  { id: 'a660b10-85c4-4ae3-8a5f-41cea3648e3e', desc: 'iki\'s Service' },
  { id: '4e236f34-b981-41c3-8c65-f8c9000b94e7', desc: 'Only Yesterday' },
  { id: '1b67aa9a-2e4a-45af-ac98-64d6ad15b16c', desc: 'Pom Poko' },
  { id: '0440483e-ca0e-4120-8c50-4c8cd9b965d6', desc: 'Princess Mononoke' },
  { id: '45204234-adfd-45cb-a505-a8e7a676b114', desc: 'My Neighbors Yamadas' },
  { id: 'd3d059c-09f4-4ff3-8d63-bc765a5184fa', desc: 'Howl\'s Moving Castle' },
  { id: '112c1e67-726f-40b1-ac17-6974127bb9b9', desc: 'Tales from Earthsea' },
  { id: '758bf02e-3122-46e0-884e-67cf83df1786', desc: 'Ponyo' },
  { id: '2de9426b-914a-4a06-a3a0-5e6d9d3886f6', desc: 'Arrietty' }
]

const stories = storiesOf('Search', module) // eslint-disable-line
stories.addDecorator(withKnobs)

stories
  .add('Autocomplete', () => (
    <Autocomplete
      data={DATA}
      placeholder={text('Placeholder', 'Film')}
      width={select(label, options, defaultValue)}
      required={boolean('Required', false)}
    />
  ))
