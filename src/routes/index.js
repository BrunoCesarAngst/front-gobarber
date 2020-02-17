import React from 'react';
import { Switch, Route } from 'react-router-dom';

// rotas de login
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

// rotas de autenticação
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/dashboard" component={Dashboard} />
      <Route path="/profile" component={Profile} />
    </Switch>
  )
}