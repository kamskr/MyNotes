import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import Button from 'components/atoms/Button/Button';
import GlobalStyle from 'theme/GlobalStyle';
import { theme } from 'theme/mainTheme';

const Root = () => (
  <div>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Fragment>
        <h1>hello</h1>
        <Button>CLOSE / SAVE</Button>
        <Button secondary>Remove</Button>
      </Fragment>
    </ThemeProvider>
  </div>
);

export default Root;
