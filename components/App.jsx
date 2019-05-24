import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import GlobalStyle from './styles/GlobalStyles';

const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <Typography variant="h1" component="h1">
        Hackathon
      </Typography>
    </Fragment>
  );
};

export default App;
