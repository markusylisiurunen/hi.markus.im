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
              Some very generic statement about why everyone should send money
              to me or at least offer me a job... with a lot of money.
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
