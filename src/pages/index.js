/**
 * @overview Front page of the website.
 */

import React from 'react';
import Helmet from 'react-helmet';

import State from '../components/State';
import Blur from '../components/Blur';
import Menu from '../components/Menu';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import CardProject from '../components/CardProject';

import SectionEducation from '../components/SectionEducation';
import SectionWork from '../components/SectionWork';

class FrontPage extends React.Component {
  render() {
    return (
      <State.Provider>
        <Helmet>
          <link
            rel="stylesheet"
            href="https://maxcdn.icons8.com/fonts/line-awesome/1.1/css/line-awesome-font-awesome.min.css"
          />
        </Helmet>
        <Menu />
        <Blur>
          <Header />
          <Hero />
          <SectionEducation />
          <SectionWork />
          <Layout.Container>
            {/* Project section */}
            <Layout.Row marginTop={32} marginBottom={0}>
              <Layout.Col>
                <h2>Projects</h2>
              </Layout.Col>
            </Layout.Row>
            <Layout.Row marginBottom={40}>
              <Layout.Col>
                <CardProject
                  name="Timelined"
                  href="https://timelined.markus.im"
                  repository="https://github.com/markusylisiurunen/timelined"
                  technologies={['Node.js', 'Docker Swarm', 'React', 'GraphQL']}
                >
                  <p css="margin-bottom: 0;">
                    A minimalistic time tracking application with the ability to
                    track time based on tags and set weekly goals based on tag
                    filters.
                  </p>
                </CardProject>
              </Layout.Col>
            </Layout.Row>
          </Layout.Container>
        </Blur>
      </State.Provider>
    );
  }
}

export default FrontPage;
