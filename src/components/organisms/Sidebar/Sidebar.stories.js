import React from 'react';
import { storiesOf } from '@storybook/react';
import Sidebar from './Sidebar';
import StoryRouter from 'storybook-react-router';

storiesOf('Organisms/Sidebar', module)
  .addDecorator(StoryRouter())
  .add('Normal', () => <Sidebar />);
