import React from 'react';

import PropTypes from 'prop-types';

import { Route, Redirect } from 'react-router-dom';
// com Redirect um componente que faz redirecionamento

export default function RouteWrapper({
  // pegando as propriedades das rotas
  component: Component, // c maiúsculo para poder usar como um componente
  // passando isPrivate para as rotas que são privadas no arquivo index.js da pasta routes
  isPrivate,
  ...rest
  // e aqui todo o resto dos parâmetros
}) {
  // para reter a informação de usuário logado
  const signed = true;

  // se a rota é privada e precisa estar logado, volta para tela de cadastro de login
  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  // se rota não for privada e estiver logado sem sentido ter que fazer cadastro de login
  if (signed && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }

  return <Route {...rest} component={Component} />;
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};
