/**
 * @overview Component for bio.
 */

import React from 'react';
import Styled from './style';

import Layout from '../Layout';
import Card from '../Card';

const projects = [
  {
    name: 'Vilkkulaattori',
    repository: 'https://github.com/markusylisiurunen',
    technologies: ['HTML', 'CSS', 'Javascript', 'jQuery'],
    description:
      "An emulator for a university course's pseudo-programming language used for programming a LED blinker.",
  },
  {
    name: 'md-table',
    repository: 'https://github.com/markusylisiurunen',
    technologies: ['Node.js', 'npm'],
    description:
      'A small package for printing Markdown style tables to a console.',
  },
  {
    name: 'git-stats',
    repository: 'https://github.com/markusylisiurunen',
    technologies: ['Node.js', 'Git', 'npm'],
    description:
      'An npm package for printing out statistics about a Git repository based on the logs.',
  },
  {
    name: 'timeline',
    repository: 'https://github.com/markusylisiurunen',
    technologies: ['Node.js', 'Google Calendar', 'Google Sheets', 'npm'],
    description:
      'A CLI tool for time tracking with support for labels. It uses Google services as the back-end.',
  },
  {
    name: 'markus.im',
    repository: 'https://github.com/markusylisiurunen',
    technologies: ['Gatsby', 'React', 'styled-components', 'now.sh'],
    description: 'My personal website that you are currently viewing.',
  },
  {
    name: 'Bouncing Box',
    repository: 'https://gitlab.com/markusylisiurunen',
    technologies: ['HTML', 'CSS', 'Javascript', 'now.sh'],
    description:
      'A Flappy Bird clone for the browser. This was created for a course at university.',
  },
  {
    name: 'live-support',
    repository: 'https://gitlab.com/markusylisiurunen',
    technologies: ['Figma'],
    description:
      'A small design project for an embeddable live customer support chat widget.',
  },
  {
    name: 'Spring simulation',
    repository: 'https://gitlab.com/markusylisiurunen',
    technologies: ['Python'],
    description:
      'A project for a course at the university which simulates a ball at the end of a spring.',
  },
];

const Projects = () => (
  <Layout.Row marginBottom={64}>
    <Layout.Col>
      <h2>Projects</h2>
    </Layout.Col>
    {projects.map(project => (
      <Layout.Col spanTablet={6} spanLaptop={4} key={project.name}>
        <Card border="none" padding="0">
          <Styled.Name>{project.name}</Styled.Name>
          <Styled.Technologies>
            {project.technologies.join(', ')}
          </Styled.Technologies>
          <Styled.Description>{project.description}</Styled.Description>
          <Styled.Repository href={project.repository}>
            <i className="fa fa-github" />
            <span>GitHub</span>
          </Styled.Repository>
        </Card>
      </Layout.Col>
    ))}
  </Layout.Row>
);

export default Projects;
