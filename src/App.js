import React from 'react';

import { Provider } from 'react-redux';

import { Router } from 'react-router-dom';

import './config/ReactotronConfig';

import Routes from './routes';

import history from './services/history';
/* para ouvir todas as partes de navegação dentro do history */

import store from './store';
/* recebendo o store do redux */

import GlobalStyle from './styles/global';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Routes />
        <GlobalStyle />
      </Router>
    </Provider>
  );
}

export default App;
