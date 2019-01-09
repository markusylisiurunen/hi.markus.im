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
import CardEducation from '../components/CardEducation';
import CardWork from '../components/CardWork';
import CardProject from '../components/CardProject';

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
          <Layout.Container>
            {/* Education section */}
            <Layout.Row marginTop={32} marginBottom={0}>
              <Layout.Col>
                <h2>Education</h2>
              </Layout.Col>
            </Layout.Row>
            <Layout.Row>
              <Layout.Col>
                <CardEducation
                  school="Tampere University of Technology"
                  degree="Master of Science (Technology)"
                  dates="08/2016 - (05/2021)"
                >
                  <p css="margin-bottom: 0;">
                    I have been studying software development and machine
                    learning and currently most exicted by data science and
                    machine learning courses.
                  </p>
                </CardEducation>
                <CardEducation
                  school="Ylöjärven lukio"
                  degree="High school graduate"
                  dates="08/2013 - 06/2016"
                >
                  <p css="margin-bottom: 0;">
                    The subjects I wrote were mathematics, physics, chemistry,
                    English and Finnish.
                  </p>
                </CardEducation>
              </Layout.Col>
            </Layout.Row>

            {/* Work section */}
            <Layout.Row marginTop={32} marginBottom={0}>
              <Layout.Col>
                <h2>Work</h2>
              </Layout.Col>
            </Layout.Row>
            <Layout.Row>
              <Layout.Col>
                <CardWork
                  company="Intopalo Digital Oy"
                  title="Software Developer"
                  dates="05/2017 - present"
                >
                  <p>
                    I have worked in various customer projects as a software
                    developer with teams of three to seven people. Majority of
                    the time I have been working with both front-end and
                    back-end technologies written in many languages and
                    integrated with other technologies.
                  </p>
                  <p css="margin-bottom: 0;">
                    I have received a certificate of appreciation which is given
                    to few people each year. The certificate was given because
                    of great performance during the last year.
                  </p>
                </CardWork>
              </Layout.Col>
            </Layout.Row>

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
