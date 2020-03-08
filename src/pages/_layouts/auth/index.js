import React from 'react';

import PropTypes from 'prop-types';

import { Wrapper } from './styles';

export default function AuthLayout({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

AuthLayout.propTypes = {
  // ..pes.element.isR.., para dizer que é assim <Element /> e não element(func)
  children: PropTypes.element.isRequired,
};
