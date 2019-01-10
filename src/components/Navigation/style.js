/**
 * @overview Styled components for the Navigation component.
 */

import styled from 'styled-components';

const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 64px;
  margin-top: 48px;
  width: 100%;
`;

const LogoBar = styled.span`
  background-color: rgba(0, 0, 0, 1);
  height: ${props => props.size}px;
  margin-right: 3px;
  width: 10px;
`;

const NavigationLink = styled.a`
  color: rgba(0, 0, 0, ${p => (p.active ? '1' : '0.4')});
  cursor: pointer;
  display: block;
  margin-left: 32px;

  &:hover {
    color: rgba(0, 0, 0, 1);
    text-decoration: underline;
  }
`;

export default { Container, LogoBar, NavigationLink };
