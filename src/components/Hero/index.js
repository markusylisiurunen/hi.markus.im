/**
 * @overview Hero component.
 */

import React from 'react';
import Styled from './style';

import Layout from '../Layout';

/**
 * Bio component.
 */
const Bio = () => (
  <div css="width: 100%;">
    <Styled.Name>Markus Ylisiurunen</Styled.Name>
    <Styled.Social
      href="https://github.com/markusylisiurunen"
      hoverColor="#4078c0"
    >
      Github
    </Styled.Social>
    <Styled.Social
      href="https://www.linkedin.com/in/markus-ylisiurunen-654720174/"
      hoverColor="#0077b5"
    >
      LinkedIn
    </Styled.Social>
    <Styled.Social href="mailto:hello@markus.im" hoverColor="#fd5c63">
      hello@markus.im
    </Styled.Social>
  </div>
);

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
            <Bio />
          </Layout.Col>
        </Layout.Row>
      </Layout.Container>
    );
  }
}

export default Hero;
