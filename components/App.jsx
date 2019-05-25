import React, { Fragment } from 'react';
import GlobalStyle from './styles/GlobalStyles';
import AccordionList from './AccordionList';
// import LiveChat from './LiveChat.jsx';

const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <AccordionList category="Nouns" className="section" />
      <AccordionList category="Verbs" />
      <AccordionList category="Adjectives" />
      <div style={{ height: '130px' }} />
      {/* <LiveChat /> */}
    </Fragment>
  );
};

export default App;
