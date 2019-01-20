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

const ContactMe = styled.a`
  border-radius: 20px;
  border: 2px solid #000000;
  color: inherit;
  display: block;
  font-family: 'Noto Sans', sans-serif;
  font-weight: 700;
  height: 40px;
  line-height: 36px;
  padding: 0 16px;
  text-decoration: none;
  transition: color 275ms linear, background-color 275ms linear;

  &:hover {
    background-color: #000000;
    color: #ffffff;
  }

  @media screen and (min-width: ${breakpoints.tablet}) {
    font-weight: 400;
  }
`;

export default { Container, LogoBar, ContactMe };
