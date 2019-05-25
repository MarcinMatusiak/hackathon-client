import React, { Fragment } from 'react';
import GlobalStyle from './styles/GlobalStyles';
import AccordionList from './AccordionList';

const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <AccordionList category="Nouns" />
      <AccordionList category="Verbs" />
      <AccordionList category="Adjectives" />
    </Fragment>
  );
};

export default App;
