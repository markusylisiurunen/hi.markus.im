/**
 * @overview Hero component.
 */

import React from 'react';
import Styled from './style';

import Layout from '../Layout';
import Card from '../Card';
import Breakpoints from '../Breakpoints';

const BioGroup = ({ name, children }) => (
  <div>
    <span css="display: block; font-weight: 700; font-family: 'Noto Sans';">
      {name}
    </span>
    <span css="display: block; margin-bottom: 16px;">{children}</span>
  </div>
);

const Bio = () => (
  <Breakpoints.Consumer>
    {({ breakpoints, currentBreakpoint }) => {
      const isAtLeastTablet =
        breakpoints[currentBreakpoint] >= breakpoints.tablet;

      return (
        <Card>
          <Layout.Container paddingHorizontal="0px">
            <Layout.Row marginBottom={-16}>
              <Layout.Col span={isAtLeastTablet ? 6 : 12} css="margin-bottom: 0;">
                <div css="width: 100%;">
                  <h4>Markus Ylisiurunen</h4>
                  <BioGroup name="Email address">hello@markus.im</BioGroup>
                  <BioGroup name="Socials">Github, LinkedIn</BioGroup>
                  <BioGroup name="Languages">
                    Finnish, English, Swedish
                  </BioGroup>
                  <BioGroup name="School">
                    Tampere University of Technology
                  </BioGroup>
                  <BioGroup name="Employer">Intopalo Digital Oy</BioGroup>
                </div>
              </Layout.Col>
              <Layout.Col span={isAtLeastTablet ? 6 : 12} css="margin-bottom: 0;">
                <BioGroup name="Programming languages">
                  C#, C++, CSS, HTML, Java, Javascript, Matlab, PHP, Python,
                  Qml, SQL, Sass, Scala
                </BioGroup>
                <BioGroup name="Frameworks">
                  Akka, Alpakka, Cypress, Django, Emotion, Express, Gatsby,
                  GraphQL, Next.js, NumPy, Pandas, Puppeteer, Qt, React, Redux,
                  Socket.io, Unity, Vue, Vuex, jQuery, styled-components
                </BioGroup>
                <BioGroup name="Other technologies">
                  AWS, Ansible, Docker, Docker Swarm, Git, HTTP, Jenkins,
                  Kubernetes, Linux, MongoDB, MySQL, Nginx, PostgreSQL, REST,
                  RabbitMQ, Spark, Traefik, Vagrant, Websocket
                </BioGroup>
              </Layout.Col>
            </Layout.Row>
          </Layout.Container>
        </Card>
      );
    }}
  </Breakpoints.Consumer>
);

class Hero extends React.Component {
  render() {
    return (
      <Layout.Container>
        <Layout.Row marginTop={40}>
          <Layout.Col>
            <Styled.Statement>
              Some very generic statement about why everyone should send money
              to me or at least offer me a job... with a lot of money.
            </Styled.Statement>
          </Layout.Col>
          <Layout.Col>
            <Bio />
          </Layout.Col>
        </Layout.Row>
      </Layout.Container>
    );
  }
}

export default Hero;
