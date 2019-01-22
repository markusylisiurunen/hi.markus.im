/**
 * @overview Component for the navigation.
 */

import React from 'react';
import Styled from './style';

import Link from '../Link';

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
    <Link href="mailto:hi@markus.im" block>
      Say hi
    </Link>
  </Styled.Container>
);

export default Navigation;
