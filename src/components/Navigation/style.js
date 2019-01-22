/**
 * @overview Styled components for the Navigation component.
 */

import styled from 'styled-components';
import breakpoints from '../../utils/breakpoints';

const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 48px;
  margin-top: 32px;
  width: 100%;

  @media screen and (min-width: ${breakpoints.tablet}) {
    margin-bottom: 80px;
    margin-top: 48px;
  }
`;

const LogoBar = styled.span`
  background-color: #000000;
  height: ${props => props.size}px;
  margin-right: 3px;
  width: 11px;
`;

export default { Container, LogoBar };
