/**
 * @overview Front page of the website.
 */

import React from 'react';
import Helmet from 'react-helmet';

import Bio from '../components/Bio';
import Projects from '../components/Projects';
import Layout from '../components/Layout';
import Navigation from '../components/Navigation';
import SectionEducation from '../components/SectionEducation';
import SectionWork from '../components/SectionWork';

const FrontPage = () => (
  <Layout.Container>
    <Navigation />
    <Bio />
    <Layout.Row marginTop={64}>
      <Layout.Col spanTablet={6}>
        <SectionEducation />
      </Layout.Col>
      <Layout.Col spanTablet={6}>
        <SectionWork />
      </Layout.Col>
    </Layout.Row>
    {/* <Projects /> */}
  </Layout.Container>
);

export default () => (
  <React.Fragment>
    <Helmet>
      <link
        rel="stylesheet"
        href="https://maxcdn.icons8.com/fonts/line-awesome/1.1/css/line-awesome-font-awesome.min.css"
      />
      <title>Markus Ylisiurunen</title>
    </Helmet>
    <FrontPage />
  </React.Fragment>
);
