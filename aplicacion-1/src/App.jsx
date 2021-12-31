import React, { Fragment } from 'react';

import { ThemeProvider } from '@material-ui/styles';
import theme from './themeConfig';


import ResponsiveDrawer from './components/Contenedor';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ResponsiveDrawer />
    </ThemeProvider>
  );
}

export default App;
