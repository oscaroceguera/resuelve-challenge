import React from 'react'

import { storiesOf } from '@storybook/react'

import SearchBtn from '../src/components/SearchBtn'


const stories = storiesOf('Buttons', module) // eslint-disable-line

stories
  .add('SeachBtn', () => (
    <SearchBtn onClick={f => f} />
  ))
