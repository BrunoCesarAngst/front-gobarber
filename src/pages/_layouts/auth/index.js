import React from 'react';

import PropTypes from 'prop-types';

import { Wrapper, Content } from './styles';

export default function AuthLayout({ children }) {
  return (
    <Wrapper>
      <Content>{children}</Content>
    </Wrapper>
  );
}

AuthLayout.propTypes = {
  // ..pes.element.isR.., para dizer que é assim <Element /> e não element(func)
  children: PropTypes.element.isRequired,
};
