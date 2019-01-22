/**
 * @overview Styled components for the SectionEducation component.
 */

import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
`;

const School = styled.h3`
  font-size: 1em;
  font-weight: 700;
  line-height: 1.45;
  margin-bottom: 4px;
  margin-top: 0;
`;

const Degree = styled.p`
  margin-bottom: 4px;
  margin-top: 0;
`;

const Dates = styled.p`
  color: rgba(0, 0, 0, 0.4);
  margin-bottom: 16px;
  margin-top: 0;
`;

export default { Container, School, Degree, Dates };
