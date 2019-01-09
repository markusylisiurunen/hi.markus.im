/**
 * @overview Education card component.
 */

import React from 'react';
import Styled from './style';

import Card from '../Card';

const { School, Degree, Dates } = Styled;

const CardEducation = ({ school, degree, dates, children, ...props }) => (
  <Card border="none" padding="0px" {...props}>
    <School>{school}</School>
    <Degree>{degree}</Degree>
    <Dates>{dates}</Dates>
    {children}
  </Card>
);

export default CardEducation;
