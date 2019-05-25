import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import GlobalStyle from './styles/GlobalStyles';
import Card from './Card';

const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <Typography variant="h1" component="h1">
        <Card link="http://www.sclance.com/pngs/sad-png/sad_png_1195144.jpg" text="Sad" />
      </Typography>
    </Fragment>
  );
};

export default App;
