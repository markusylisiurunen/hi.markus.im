/**
 * @overview Styled components for the layout.
 */

import styled from 'styled-components';

/**
 * A styled component for the grid container.
 */
const Container = styled.div`
  overflow: hidden;
  padding: 0 16px;
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
  margin: 0 8px;
  width: calc(${p => p.percentageWidth * 100}% - 16px);
`;

export default { Container, Row, Col };
