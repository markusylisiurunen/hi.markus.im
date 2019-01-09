/**
 * @overview Front page of the website.
 */

import React from 'react';
import Helmet from 'react-helmet';

import Breakpoints from '../components/Breakpoints';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import SectionEducation from '../components/SectionEducation';
import SectionWork from '../components/SectionWork';

const Head = () => (
  <Helmet>
    <link
      rel="stylesheet"
      href="https://maxcdn.icons8.com/fonts/line-awesome/1.1/css/line-awesome-font-awesome.min.css"
    />
  </Helmet>
);

const SectionEducationAndWork = () => (
  <Breakpoints.Consumer>
    {({ breakpoints, currentBreakpoint }) => {
      const isAtLeastTablet =
        breakpoints[currentBreakpoint] >= breakpoints.tablet;

      return (
        <Layout.Container paddingHorizontal="0">
          <Layout.Row marginBottom={0}>
            <Layout.Col span={isAtLeastTablet ? 6 : 12}>
              <SectionEducation />
            </Layout.Col>
            <Layout.Col span={isAtLeastTablet ? 6 : 12}>
              <SectionWork />
            </Layout.Col>
          </Layout.Row>
        </Layout.Container>
      );
    }}
  </Breakpoints.Consumer>
);

class FrontPage extends React.Component {
  state = {
    breakpoints: {
      mobile: 0,
      tablet: 768,
      laptop: 1024,
    },
  };

  render() {
    return (
      <Breakpoints.Provider breakpoints={this.state.breakpoints}>
        <Head />
        <Header />
        <Hero />
        <SectionEducationAndWork />
      </Breakpoints.Provider>
    );
  }
}

export default FrontPage;
