import React from 'react';
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs';
import Input from './Input';

export default { title: 'Atoms/Input', decorators: [withKnobs] };

export const input = () => <Input placeholder="input" />;
export const inputSearch = () => <Input placeholder="search" search />;
// Knobs as dynamic variables.
