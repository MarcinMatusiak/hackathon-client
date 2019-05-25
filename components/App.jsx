import React, { Fragment } from 'react';
import GlobalStyle from './styles/GlobalStyles';
import MessageArea from './MessageArea';
import SpeechSynthesis from './SpeechSynthesis';


const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <MessageArea />
      <SpeechSynthesis />
    </Fragment>
  );
};

export default App;
