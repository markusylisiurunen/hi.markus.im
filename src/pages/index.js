import React from 'react'
import { graphql } from 'gatsby'

import Bio from '../components/Bio'
import Education from '../components/Education'
import Grid from '../components/Grid'
import Head from '../components/Head'
import Navigation from '../components/Navigation'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Work from '../components/Work'

const IndexPage = ({ data }) => (
  <>
    <Head />
    <Grid.Container>
      <Grid.Spacer heightXs="16" heightMd="24" />
      <Grid.Row>
        <Grid.Column>
          <Navigation />
        </Grid.Column>
      </Grid.Row>
      <Grid.Spacer heightXs="72" heightMd="88" heightLg="120" />
      <Grid.Row>
        <Grid.Column spanMd="6">
          <Bio />
        </Grid.Column>
      </Grid.Row>
      <Grid.Spacer heightXs="72" heightMd="80" />
      <Grid.Row>
        <Grid.Column>
          <Skills />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column spanMd="6">
          <Grid.Spacer heightXs="72" heightMd="80" />
          <h2>Education</h2>
          {data.allEducationJson.edges.map(({ node }) => (
            <Education {...node} key={node.school} />
          ))}
        </Grid.Column>
        <Grid.Column spanMd="6">
          <Grid.Spacer heightXs="72" heightMd="80" />
          <h2>Work</h2>
          {data.allWorkJson.edges.map(({ node }) => (
            <Work {...node} key={node.employer} />
          ))}
        </Grid.Column>
      </Grid.Row>
      <Grid.Spacer heightXs="72" heightMd="80" />
      <Grid.Row>
        <Grid.Column>
          <Projects />
        </Grid.Column>
      </Grid.Row>
      <Grid.Spacer heightXs="40" />
    </Grid.Container>
  </>
)

export default IndexPage

export const query = graphql`
  query IndexPageQuery {
    allEducationJson {
      edges {
        node {
          school
          degree
          startDate
          endDate
          description
          attachments {
            type
            name
            fileName
          }
        }
      }
    }

    allWorkJson {
      edges {
        node {
          employer
          jobTitle
          startDate
          endDate
          description
          attachments {
            type
            name
            fileName
          }
        }
      }
    }
  }
`
