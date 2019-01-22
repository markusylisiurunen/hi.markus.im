/**
 * @overview Component for the navigation.
 */

import React from 'react';
import Styled from './style';

const Logo = () => (
  <div css="display: flex;">
    <Styled.LogoBar size={34} />
    <Styled.LogoBar size={23} />
    <Styled.LogoBar size={34} />
  </div>
);

const Navigation = () => (
  <Styled.Container>
    <Logo />
    <Styled.ContactMe href="mailto:hi@markus.im">Say hello</Styled.ContactMe>
  </Styled.Container>
);

export default Navigation;
