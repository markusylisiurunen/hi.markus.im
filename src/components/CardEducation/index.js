/**
 * @overview Education card component.
 */

import React from 'react';
import styled from './style';

const { Container, School, Degree, Dates } = styled;

const EducationCard = ({ school, degree, dates, children }) => (
  <Container>
    <School>{school}</School>
    <Degree>{degree}</Degree>
    <Dates>{dates}</Dates>
    {children}
  </Container>
);

export default EducationCard;
