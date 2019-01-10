/**
 * @overview Component for the navigation.
 */

import React from 'react';
import Styled from './style';

import { withBreakpoints } from '../Breakpoints';

const { Container, LogoBar, NavigationLink } = Styled;

const Logo = ({ size }) => (
  <div css="display: flex;">
    <LogoBar size={size} />
    <LogoBar size={(2 / 3) * size} />
    <LogoBar size={size} />
  </div>
);

const NavigationLinks = withBreakpoints(
  ({ breakpoints, media }) =>
    breakpoints[media] >= breakpoints.tablet && (
      <div css="display: flex;">
        <NavigationLink active>About</NavigationLink>
        <NavigationLink>Education</NavigationLink>
        <NavigationLink>Work</NavigationLink>
        <NavigationLink>Projects</NavigationLink>
      </div>
    )
);

const Navigation = () => (
  <Container>
    <Logo size="32" />
    <NavigationLinks />
  </Container>
);

export default Navigation;
