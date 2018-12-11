import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

// import { ERD, Welcome } from '@storybook/react/demo';

import ERD from '../index';

// storiesOf('ERD', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('ERD', module)
  .add('default', () => <ERD />);
