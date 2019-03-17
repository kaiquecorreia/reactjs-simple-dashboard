import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import './config/reactotron';
// import GlobalStyles from './styles/global';

import Sidebar from './components/Sidebar';

import Routes from './routes';
import store from './store';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Sidebar>
        <Routes />
      </Sidebar>
    </BrowserRouter>
  </Provider>
);

export default App;
