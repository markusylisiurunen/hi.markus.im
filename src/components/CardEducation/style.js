/**
 * @overview Styled components for an education card.
 */

import styled from 'styled-components';

const Container = styled.div`
  margin-bottom: 32px;
  width: 100%;
`;

const School = styled.h3`
  font-size: 1em;
  font-weight: 700;
  margin: 0 0 6px 0;
`;

const Degree = styled.p`
  margin: 0 0 6px 0;
`;

const Year = styled.p`
  color: rgba(0, 0, 0, 0.5);
  margin: 0 0 14px 0;
`;

const Description = styled.p`
  margin: 0;
`;

export default { Container, School, Degree, Year, Description };
