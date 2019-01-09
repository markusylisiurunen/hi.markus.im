/**
 * @overview Styled components for the layout.
 */

import styled from 'styled-components';

/**
 * A styled component for the grid container.
 */
const Container = styled.div`
  margin: 0 auto;
  max-width: 1120px;
  overflow: hidden;
  padding: 0 ${p => p.paddingHorizontal === undefined ? '16px' : p.paddingHorizontal};
`;

/**
 * A styled component for a row.
 */
const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: ${p => `${p.marginTop} -8px ${p.marginBottom} -8px`};
`;

/**
 * A styled component for a column.
 */
const Col = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 0 0 auto;
  margin: 0 8px 16px 8px;
  width: calc(${p => p.percentageWidth * 100}% - 16px);

  &:last-child {
    margin-bottom: 0;
  }
`;

export default { Container, Row, Col };
