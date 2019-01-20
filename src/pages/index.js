/**
 * @overview Front page of the website.
 */

import React from 'react';
import Helmet from 'react-helmet';

import Bio from '../components/Bio';
import Breakpoints, { withBreakpoints } from '../components/Breakpoints';
import Layout from '../components/Layout';
import Navigation from '../components/Navigation';
import SectionEducation from '../components/SectionEducation';
import SectionWork from '../components/SectionWork';

const FrontPage = withBreakpoints(({ breakpoints, media }) => (
  <Layout.Container>
    <Layout.Row>
      <Layout.Col>
        <Navigation />
      </Layout.Col>
    </Layout.Row>
    <Bio />
    <Layout.Row>
      <Layout.Col span={breakpoints[media] >= breakpoints.tablet ? 6 : 12}>
        <SectionEducation />
      </Layout.Col>
      <Layout.Col span={breakpoints[media] >= breakpoints.tablet ? 6 : 12}>
        <SectionWork />
      </Layout.Col>
    </Layout.Row>
  </Layout.Container>
));

export default () => (
  <Breakpoints>
    {/* prettier-ignore */}
    <Helmet>
      <link rel="stylesheet" href="https://maxcdn.icons8.com/fonts/line-awesome/1.1/css/line-awesome-font-awesome.min.css" />
      <title>Markus Ylisiurunen</title>
    </Helmet>
    <FrontPage />
  </Breakpoints>
);
