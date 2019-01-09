/**
 * @overview Styled components for a card.
 */

import styled from 'styled-components';

// prettier-ignore
const Container = styled.div`
  border-radius: 6px;
  border: ${p => (p.border === undefined ? '1px solid rgba(0, 0, 0, 0.08)' : p.border)};
  margin-bottom: ${p => (p.marginBottom === undefined ? '16px' : p.marginBottom)};
  padding: ${p => (p.padding === undefined ? '12px' : p.padding)};
  position: relative;
  width: 100%;
`;

export default { Container };
