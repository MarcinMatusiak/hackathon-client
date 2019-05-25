import React, { Fragment } from 'react';
import GlobalStyle from './styles/GlobalStyles';
import AccordionList from './AccordionList';


const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <AccordionList category="Nouns" className="section"/>
      <AccordionList category="Verbs" />
      <AccordionList category="Adjectives" />
      <div style={{height: "130px"}} />
    </Fragment>
  );
};

export default App;
