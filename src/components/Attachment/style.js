/**
 * @overview Styled components for the attachment component.
 */

import styled from 'styled-components';

const Container = styled.div`
  align-items: center;
  border-radius: 6px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  display: flex;
  font-family: 'Noto Sans', sans-serif;
  margin-bottom: 8px;
  padding: 12px 8px;

  &:last-child {
    margin-bottom: 0;
  }

  i {
    font-size: 32px;
    margin-right: 8px;

    &.fa-file-pdf-o {
      color: #c30909;
    }
  }
`;

export default { Container };
