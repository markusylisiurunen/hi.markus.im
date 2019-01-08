/**
 * @overview Front page of the website.
 */

import React from 'react';
import Helmet from 'react-helmet';
import { Link, graphql } from 'gatsby';

import Header from '../components/Header';
import Layout from '../components/Layout';

class FrontPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <link
            rel="stylesheet"
            href="https://maxcdn.icons8.com/fonts/line-awesome/1.1/css/line-awesome-font-awesome.min.css"
          />
        </Helmet>
        <Header />
        <Layout.Container>
          <Layout.Row marginTop={40}>
            <Layout.Col>
              <h2 css="font-size: 1.8em; font-weight: 500; line-height: 1.33;">
                A full-stack developer with a constant urge to learn more and
                tackle new challenges.
              </h2>
            </Layout.Col>
          </Layout.Row>
          <Layout.Row marginTop={24}>
            <Layout.Col>
              <div>
                <p css="color: #000000; margin-bottom: 16px;">Markus Ylisiurunen</p>
                <span css="color: rgb(120, 120, 120);">
                  <p css="margin: 0; color: inherit;">Github</p>
                  <p css="margin: 0; color: inherit;">LinkedIn</p>
                  <p css="margin: 0; color: inherit;">hello@markus.im</p>
                </span>
              </div>
            </Layout.Col>
          </Layout.Row>
        </Layout.Container>
      </React.Fragment>
    );
  }
}

export default FrontPage;
