/**
 * @overview Styled components for the hero section.
 */

import styled from 'styled-components';

/**
 * A styled hero section statement text.
 */
const Statement = styled.h2`
  font-size: 29px;
  line-height: 1.45;
  margin-bottom: 32px;
`;

/**
 * A styled name.
 */
const Name = styled.span`
  display: block;
  margin-bottom: 12px;
`;

/**
 * A styled social link.
 */
const Social = styled.a`
  color: rgba(0, 0, 0, 0.5);
  display: block;
  text-decoration: underline;
  transition: color 375ms 0ms ease-in-out;

  &:hover {
    color: ${props => props.hoverColor};
  }
`;

export default { Statement, Name, Social };
