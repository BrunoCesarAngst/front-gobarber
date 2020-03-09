import React from 'react';

import { Provider } from 'react-redux';

import { Router } from 'react-router-dom';

import './config/ReactotronConfig';

import Routes from './routes';
import history from './services/history';

import store from '~/store';

import GlobalStyle from './styles/global';

function App() {
  return (
    /* recebendo o store do redux */
    <Provider store={store}>
      {/* para ouvir todas as partes de navegação dentro do history */}
      <Router history={history}>
        <Routes />
        <GlobalStyle />
      </Router>
    </Provider>
  );
}

export default App;
