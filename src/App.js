import React from 'react';
import { Router } from 'react-router-dom'

import Routes from './routes';
import history from './services/history';

function App() {
  return (
    // para ouvir todas as partes de navegação dentro do history
    <Router history={history}>
      <Routes />
    </Router>
  );
}

export default App;
