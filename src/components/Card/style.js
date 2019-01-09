/**
 * @overview Styled components for a card.
 */

import styled from 'styled-components';

const Container = styled.div`
  border-radius: 6px;
  border: ${p => (p.border ? '1px solid rgba(0, 0, 0, 0.08)' : 'none')};
  margin-bottom: ${p => (p.noMargin ? '0' : '16px')};
  padding: ${p => (p.noPadding ? '0' : '12px')};
  position: relative;
  width: 100%;

  &:last-child {
    margin-bottom: 0;
  }
`;

export default { Container };
