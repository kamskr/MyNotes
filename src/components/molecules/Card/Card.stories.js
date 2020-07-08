import React from 'react';

import Card from './Card';

export default { title: 'Card' };

export const cardNote = () => <Card />;
export const cardTwitter = () => <Card cardType="twitter" />;
export const cardArticle = () => <Card cardType="article" />;
// Knobs as dynamic variables.
