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
        </Blur>
      </State.Provider>
    );
  }
}

export default FrontPage;
