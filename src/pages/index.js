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
import EducationCard from '../components/EducationCard';

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
            <Layout.Row marginTop={32} marginBottom={0}>
              <Layout.Col>
                <h2>Education</h2>
              </Layout.Col>
            </Layout.Row>
            <Layout.Row>
              <Layout.Col>
                <EducationCard
                  school="Tampere University of Technology"
                  degree="Master of Science (Technology)"
                  dates="08/2016 - (05/2021)"
                  description="I have been studying software development and machine learning and currently most exicted by data science and machine learning courses."
                />
                <EducationCard
                  school="Ylöjärven lukio"
                  degree="High school graduate"
                  dates="08/2013 - 06/2016"
                  description="The subjects I wrote were mathematics, physics, chemistry, English and Finnish."
                />
              </Layout.Col>
            </Layout.Row>
          </Layout.Container>
        </Blur>
      </State.Provider>
    );
  }
}

export default FrontPage;
