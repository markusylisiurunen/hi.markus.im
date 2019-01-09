/**
 * @overview Blur the content when the menu is open.
 */

import React from 'react';
import Styled from './style';

import State from '../State';

/**
 * Blur when menu is open.
 */
const Blur = ({ children }) => (
  <State.Consumer>
    {props => <Styled.Blur {...props}>{children}</Styled.Blur>}
  </State.Consumer>
);

export default Blur;
