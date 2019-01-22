/**
 * @overview Component for links.
 */

import React from 'react';
import Styled from './style';
import colors from '../../utils/colors';

const { accentPink } = colors;

const Link = ({ inline, block, color = accentPink, children, ...props }) => (
  <React.Fragment>
    {inline && (
      <Styled.LinkInline color={color} {...props}>
        <span>{children}</span>
      </Styled.LinkInline>
    )}
    {block && (
      <Styled.LinkBlock color={color} {...props}>
        <span>{children}</span>
        <Styled.Arrow className="fa fa-long-arrow-right" />
      </Styled.LinkBlock>
    )}
  </React.Fragment>
);

export default Link;
