/**
 * @overview Layout components.
 */

import React from 'react';
import Styled from './style';
import { toPixelOrPercentage } from '../../utils/components';

const RowContext = React.createContext(null);

/**
 * Grid container component.
 * @param {Object} _.children Children to render within the container.
 */
const Container = ({ children, ...props }) => (
  <Styled.Container {...props}>{children}</Styled.Container>
);

/**
 * Grid row component.
 * @param {Number}        _.columns      Number of columns within this row.
 * @param {Number|String} _.marginTop    A custom top margin for the row.
 * @param {Number|String} _.marginBottom A custom bottom margin for the row.
 * @param {Object}        _.children     Children to render within the row.
 */
const Row = ({ columns = 12, marginTop, marginBottom, children, ...props }) => {
  const styledProps = {
    marginTop: toPixelOrPercentage(marginTop, '0px'),
    marginBottom: toPixelOrPercentage(marginBottom, '16px'),
  };

  return (
    <Styled.Row {...styledProps} {...props}>
      <RowContext.Provider value={columns}>{children}</RowContext.Provider>
    </Styled.Row>
  );
};

/**
 * Grid column component.
 * @param {Number} _.span     Number of columns to span.
 * @param {Object} _.children Children to render within the column.
 */
const Col = ({ span, children, ...props }) => (
  <RowContext.Consumer>
    {columns => (
      <Styled.Col percentageWidth={span / columns} {...props}>
        {children}
      </Styled.Col>
    )}
  </RowContext.Consumer>
);

export default { Container, Row, Col };
