import React from 'react';
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs';
import Paragraph from './Paragraph';

export default { title: 'Paragraph', decorators: [withKnobs] };

export const paragraph = () => <Paragraph>Paragraph</Paragraph>;
// Knobs as dynamic variables.
