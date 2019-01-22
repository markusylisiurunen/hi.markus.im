/**
 * @overview Biography component.
 */

import React from 'react';
import Styled from './style';
import { getMyAge } from './util';
import colors from '../../utils/colors';

import Layout from '../Layout';
import Link from '../Link';

const Bio = () => (
  <Layout.Row marginTop={48} marginBottom={0}>
    <Layout.Col spanLaptop={6}>
      <Styled.Name>Markus Ylisiurunen</Styled.Name>
      <Styled.Intro>
        I am a {getMyAge()}-year-old computer science student studying at{' '}
        <Link href="https://www.tuni.fi/fi" target="_blank" inline>
          TUNI
        </Link>{' '}
        majoring in Software Engineering and minoring in Machine Learning.
        Currently I am most interested in the web as a platform, machine
        learning and artificial intelligence. In fact, I am planning to major in
        Machine Learning, Data Science and Artificial Intelligence in my
        Master's studies.
      </Styled.Intro>
      <Styled.Intro>
        I have almost two years of professional experience as a software
        developer at{' '}
        <Link href="https://intopalodigital.fi/" inline>
          Intopalo Digital
        </Link>{' '}
        where I have contributed in various customer projects. I have had the
        change to grow, learn new technologies and soft skills, solve problems
        and have an impact on our customer's businesses.
      </Styled.Intro>
      <Styled.SocialContainer>
        <Styled.SocialLink
          href="mailto:hi@markus.im"
          hoverColor={colors.brandGmail}
          block
        >
          hi@markus.im
        </Styled.SocialLink>
        <Styled.SocialLink
          href="https://www.linkedin.com/in/markus-ylisiurunen-654720174/"
          hoverColor={colors.brandLinkedin}
          block
        >
          LinkedIn
        </Styled.SocialLink>
        <Styled.SocialLink
          href="https://github.com/markusylisiurunen"
          hoverColor={colors.brandGithub}
          block
        >
          GitHub
        </Styled.SocialLink>
      </Styled.SocialContainer>
    </Layout.Col>
  </Layout.Row>
);

export default Bio;
