/**
 * @overview Styled components for the header.
 */

import styled from 'styled-components';

/**
 * A styled component for a single logo bar.
 */
const LogoBar = styled.span`
  background-color: #000000;
  height: ${props => props.size}px;
  margin-right: 3px;
  width: 10px;
`;

/**
 * A styled component for the hamburger menu button.
 */
const HamburgerMenuButton = styled.button`
  background-color: transparent;
  border: none;
  color: #000000;
  font-size: 27px;
  height: 40px;
  line-height: 40px;
  margin: 0 0 0 auto;
  padding: 0 8px;
`;

export default { LogoBar, HamburgerMenuButton };
