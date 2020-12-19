import React from 'react';
import {Provider} from 'react-redux';

import store from './store/index.js'
import ThunderDome from './components/thunderDome/thunderDome.js';
import Header from './components/header/header.js';
import CssBaseline from '@material-ui/core/CssBaseline';

function App() {
  return (
    <>
    <Provider store={store}>

      <CssBaseline /> 
      <Header />
      <ThunderDome />
    </Provider>
    </>
  );
}


export default App;
