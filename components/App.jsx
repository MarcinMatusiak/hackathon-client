import React, { Fragment } from 'react';
import GlobalStyle from './styles/GlobalStyles';
import SpeechSynthesis from './SpeechSynthesis';

const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <SpeechSynthesis />
    </Fragment>
  );
};

export default App;
