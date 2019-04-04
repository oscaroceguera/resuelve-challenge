import React from 'react'

import { storiesOf } from '@storybook/react'

import { Autocomplete } from '../src/components/Autocomplete'

const stories = storiesOf('Search', module) // eslint-disable-line

stories
  .add('Autocomplete', () => <Autocomplete />)
