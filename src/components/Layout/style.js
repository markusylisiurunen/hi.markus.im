/**
 * @overview Styled components for the layout.
 */

import styled, { css } from 'styled-components';
import breakpoints from '../../utils/breakpoints';

/**
 * A styled component for the grid container.
 */
const Container = styled.div`
  margin: 0 auto;
  max-width: 1120px;
  overflow: hidden;
  padding: 0
    ${p => (p.paddingHorizontal === undefined ? '16px' : p.paddingHorizontal)};
`;

/**
 * A styled component for a row.
 */
const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: ${p => `${p.marginTop} -8px ${p.marginBottom} -8px`};
`;

// Generate the breakpoint styles for columns
const columnBreakpointStyles = Object.entries(breakpoints).map(
  ([name, breakpoint]) => css`
    @media screen and (min-width: ${breakpoint}) {
      ${p => {
        const propName = 'span' + name[0].toUpperCase() + name.slice(1);

        if (p[propName] === undefined) {
          return '';
        }

        return `width: calc(${(p[propName] / p.columns) * 100}% - 16px);`;
      }}
    }
  `
);

/**
 * A styled component for a column.
 */
const Col = styled.div`
  display: block;
  flex: 0 0 auto;
  margin: 0 8px 16px 8px;
  width: calc(${p => (p.span ? p.span / p.columns : 1) * 100}% - 16px);

  &:last-child {
    margin-bottom: 0;
  }

  ${columnBreakpointStyles}
`;

export default { Container, Row, Col };
