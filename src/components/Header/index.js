/**
 * @overview Header component.
 */

import React from 'react';
import Styled from './style';

import State from '../State';
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
        <Layout.Row marginTop={24} marginBottom={8}>
          <Layout.Col span={6} css="align-items: center;">
            <Logo size={30} />
          </Layout.Col>
          <Layout.Col span={6}>
            <State.Consumer>
              {({ toggleMenu }) => (
                <Styled.HamburgerMenuButton onClick={toggleMenu}>
                  <i className="fa fa-bars" />
                </Styled.HamburgerMenuButton>
              )}
            </State.Consumer>
          </Layout.Col>
        </Layout.Row>
      </Layout.Container>
    );
  }
}

export default Header;
