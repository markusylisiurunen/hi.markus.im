/**
 * @overview Styled components for an education card.
 */

import styled from 'styled-components';

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

export default { School, Degree, Dates };
