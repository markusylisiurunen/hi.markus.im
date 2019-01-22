/**
 * @overview Navigation bar component.
 */

import React from 'react';
import Styled from './style';

import Layout from '../Layout';
import Link from '../Link';

// FIXME: Replace this with an .svg
const Logo = () => (
  <div css="display: flex;">
    <Styled.LogoBar size={34} />
    <Styled.LogoBar size={23} />
    <Styled.LogoBar size={34} />
  </div>
);

const Navigation = () => (
  <Layout.Row marginBottom={0}>
    <Layout.Col>
      <Styled.Container>
        <Logo />
        <Link href="mailto:hi@markus.im" css="padding-right: 0;" block>
          Say hi
        </Link>
      </Styled.Container>
    </Layout.Col>
  </Layout.Row>
);

export default Navigation;
