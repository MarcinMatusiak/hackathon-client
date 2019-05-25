import React, { Fragment } from 'react';
import GlobalStyle from './styles/GlobalStyles';
import MessageArea from './MessageArea';
import AccordionList from './AccordionList';

const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <AccordionList />
    </Fragment>
  );
};

export default App;
