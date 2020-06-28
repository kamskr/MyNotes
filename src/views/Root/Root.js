import React from 'react';
import Button from 'components/Button/Button';
import GlobalStyle from 'theme/GlobalStyle';

const Root = () => (
  <div>
    <GlobalStyle />
    <h1>hello</h1>
    <Button>CLOSE / SAVE</Button>
    <Button secondary>Remove</Button>
  </div>
);

export default Root;
