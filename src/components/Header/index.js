/**
 * @overview Header component.
 */

import React from 'react';
import Styled from './style';

import Layout from '../Layout';

const { LogoBar, HamburgerMenuButton } = Styled;

const Logo = ({ size, ...props }) => (
  <div css="display: flex" {...props}>
    <LogoBar size={size} />
    <LogoBar size={(2 / 3) * size} />
    <LogoBar size={size} />
  </div>
);

class Header extends React.Component {
  render() {
    return (
      <Layout.Container>
        <Layout.Row marginTop={24} marginBottom={8}>
          <Layout.Col span={6} css="align-items: center;">
            <Logo size={30} />
          </Layout.Col>
          <Layout.Col span={6}>
            <HamburgerMenuButton>
              <i className="fa fa-bars" />
            </HamburgerMenuButton>
          </Layout.Col>
        </Layout.Row>
      </Layout.Container>
    );
  }
}

export default Header;
