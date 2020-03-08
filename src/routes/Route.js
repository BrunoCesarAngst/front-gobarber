import React from 'react';

import PropTypes from 'prop-types';

import { Route, Redirect } from 'react-router-dom';
// com Redirect um componente que faz redirecionamento

import AuthLayout from '../pages/_layouts/auth';
import DefaultLayout from '../pages/_layouts/default';

export default function RouteWrapper({
  // pegando as propriedades das rotas
  component: Component, // c maiúsculo para poder usar como um componente
  // passando isPrivate para as rotas que são privadas no arquivo index.js da pasta routes
  isPrivate,
  ...rest
  // e aqui todo o resto dos parâmetros
}) {
  // para reter a informação de usuário logado
  const signed = false;

  // se a rota é privada e precisa estar logado, volta para tela de cadastro de login
  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  // se rota não for privada e estiver logado sem sentido ter que fazer cadastro de login
  if (signed && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }

  // criando um condicional de renderização
  const Layout = signed ? DefaultLayout : AuthLayout;

  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  // propTypes de um component
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};
