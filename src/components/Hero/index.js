/**
 * @overview Hero component.
 */

import React from 'react';
import Styled from './style';

import Layout from '../Layout';
import CardBio from '../CardBio';

/**
 * Hero component.
 */
class Hero extends React.Component {
  render() {
    return (
      <Layout.Container>
        <Layout.Row marginTop={40}>
          <Layout.Col>
            <Styled.Statement>
              A full-stack developer with a constant urge to learn more and
              tackle new challenges.
            </Styled.Statement>
          </Layout.Col>
          <Layout.Col>
            <CardBio
              name="Markus Ylisiurunen"
              email="hello@markus.im"
              school="Tampere University of Technology"
              employer="Intopalo Digital Oy"
              socialLinks={[
                { name: 'Github', href: '' },
                { name: 'LinkedIn', href: '' },
              ]}
            />
          </Layout.Col>
        </Layout.Row>
      </Layout.Container>
    );
  }
}

export default Hero;
