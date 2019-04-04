import React from 'react';

import { storiesOf } from '@storybook/react';

import {Autocomplete} from '../src/components/Autocomplete'

const stories = storiesOf('Search', module)

stories
  .add('Autocomplete', () => <Autocomplete />)
