/**
 * @overview Education card component.
 */

import React from 'react';
import Styled from './style';

const EducationCard = ({ school, degree, dates, description }) => (
  <Styled.Container>
    <Styled.School>{school}</Styled.School>
    <Styled.Degree>{degree}</Styled.Degree>
    <Styled.Year>{dates}</Styled.Year>
    {description && <Styled.Description>{description}</Styled.Description>}
  </Styled.Container>
);

export default EducationCard;
