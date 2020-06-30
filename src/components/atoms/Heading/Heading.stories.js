import React from 'react';
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs';
import Heading from './Heading';

export default { title: 'Heading', decorators: [withKnobs] };

export const headingNormal = () => <Heading>Input</Heading>;
export const headingBig = () => <Heading big>Input</Heading>;
// Knobs as dynamic variables.
