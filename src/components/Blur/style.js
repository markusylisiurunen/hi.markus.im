/**
 * @overview Styled components for the blur container.
 */

import styled from 'styled-components';

/**
 * A styled component for the blur effect.
 */
const Blur = styled.div`
  filter: ${props => (props.menuOpen ? 'blur(4px)' : 'none')};
  transition: filter 375ms 0ms ease-out;
`;

export default { Blur };
