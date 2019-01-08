/**
 * @overview Header component.
 */

import React from 'react';
import Styled from './style';

import Layout from '../Layout';

/**
 * Logo component.
 * @param {Number} _.size Size of the logo.
 */
const Logo = ({ size, ...props }) => (
  <div css="display: flex" {...props}>
    <Styled.LogoBar size={size} />
    <Styled.LogoBar size={(2 / 3) * size} />
    <Styled.LogoBar size={size} />
  </div>
);

/**
 * Header component.
 */
class Header extends React.Component {
  render() {
    return (
      <Layout.Container>
        <Layout.Row marginTop={24}>
          <Layout.Col span={6} css="align-items: center;">
            <Logo size={30} />
          </Layout.Col>
          <Layout.Col span={6}>
            <Styled.HamburgerMenuButton>
              <i className="fa fa-bars" />
            </Styled.HamburgerMenuButton>
          </Layout.Col>
        </Layout.Row>
      </Layout.Container>
    );
  }
}

export default Header;
