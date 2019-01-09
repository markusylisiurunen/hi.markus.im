/**
 * @overview Card component.
 */

import React from 'react';
import Styled from './style';

const { Container } = Styled;

const Card = ({ children, ...props }) => (
  <Container {...props}>{children}</Container>
);

export default Card;
