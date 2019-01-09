/**
 * @overview Work card component.
 */

import React from 'react';
import Styled from './style';

import Card from '../Card';

const { Employer, JobTitle, Dates } = Styled;

const CardWork = ({ employer, jobTitle, dates, children, ...props }) => (
  <Card border="none" padding="0px" {...props}>
    <Employer>{employer}</Employer>
    <JobTitle>{jobTitle}</JobTitle>
    <Dates>{dates}</Dates>
    {children}
  </Card>
);

export default CardWork;
