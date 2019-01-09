/**
 * @overview Styled components for the layout.
 */

import styled from 'styled-components';

/**
 * A styled component for the grid container.
 */
const Container = styled.div`
  background-color: rgba(255, 255, 255, 0.9);
  bottom: 0;
  display: ${props => (props.show ? 'block' : 'none')};
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 10;
`;

/**
 * A styled component for a link.
 */
const Link = styled.a`
  color: ${props => (props.active ? 'inherit' : 'rgba(0, 0, 0, 0.5)')};
  display: block;
  font-family: 'Noto Sans', sans-serif;
  margin-bottom: 8px;
  padding: 4px 0;
  text-align: center;
  text-decoration: ${props => (props.active ? 'underline' : 'none')};
  width: 100%;
`;

export default { Container, Link };
