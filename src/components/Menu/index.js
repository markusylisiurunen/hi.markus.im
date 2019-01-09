/**
 * @overview Menu component.
 */

import React from 'react';
import Styled from './style';

import State from '../State';
import Layout from '../Layout';

/**
 * Overlay menu component.
 */
const Menu = () => (
  <State.Consumer>
    {({ menuOpen, toggleMenu }) => (
      <Styled.Container show={menuOpen} onClick={toggleMenu}>
        <Layout.Container>
          <Layout.Row marginTop={72}>
            <Layout.Col>
              <Styled.Link>Statement</Styled.Link>
              <Styled.Link active>Contact</Styled.Link>
              <Styled.Link>Education</Styled.Link>
              <Styled.Link>Work</Styled.Link>
              <Styled.Link>Skills</Styled.Link>
              <Styled.Link>Awards</Styled.Link>
            </Layout.Col>
          </Layout.Row>
        </Layout.Container>
      </Styled.Container>
    )}
  </State.Consumer>
);

export default Menu;
