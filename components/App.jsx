import React, { Fragment } from 'react';
import GlobalStyle from './styles/GlobalStyles';
import MessageArea from './MessageArea';

const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <MessageArea />
    </Fragment>
  );
};

export default App;
