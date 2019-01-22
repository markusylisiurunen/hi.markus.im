/**
 * @overview Component for bio.
 */

import React from 'react';
import Styled from './style';

import Layout from '../Layout';

const Bio = () => (
  <Layout.Row marginBottom={64}>
    <Layout.Col spanTablet={6}>
      <Styled.Name>Markus Ylisiurunen</Styled.Name>
      <Styled.SocialContainer>
        <Styled.Social href="mailto:hi@markus.im" color="#c43a64">
          <Styled.SocialIcon className="fa fa-at" />
          <span>hi@markus.im</span>
        </Styled.Social>
        <Styled.Social
          href="https://www.linkedin.com/in/markus-ylisiurunen-654720174"
          target="_blank"
          color="#0077b5"
        >
          <Styled.SocialIcon className="fa fa-linkedin" />
          <span>LinkedIn</span>
        </Styled.Social>
        <Styled.Social
          href="https://github.com/markusylisiurunen"
          target="_blank"
          color="#171515"
        >
          <Styled.SocialIcon className="fa fa-github" />
          <span>GitHub</span>
        </Styled.Social>
      </Styled.SocialContainer>
    </Layout.Col>
    <Layout.Col spanTablet={6}>
      <Styled.Intro>
        I am a 21-year-old computer science student majoring in Software
        Engineering and minorint in Machine Learning. I have started getting
        into programming at around the age 15 and since then I have been
        learning and trying out new things constantly.
      </Styled.Intro>
      <Styled.Intro>
        Currently I am most excited about Machine Learning and Artificial
        Intelligence and I am planning to major in that in my Master's studies.
        I have been working almost the last two years as a software developer at{' '}
        <a href="https://intopalodigital.fi">Intopalo Digital</a> where I have
        got the chance to grow and learn many new valuable tehcnologies and
        other skills.
      </Styled.Intro>
    </Layout.Col>
  </Layout.Row>
);

export default Bio;
