/**
 * @overview Work card component.
 */

import React from 'react';
import styled from './style';

const { Container, Company, Title, Dates } = styled;

const CardWork = ({ company, title, dates, children }) => (
  <Container>
    <Company>{company}</Company>
    <Title>{title}</Title>
    <Dates>{dates}</Dates>
    {children}
  </Container>
);

export default CardWork;
