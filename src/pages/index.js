import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'

import Navigation from '../components/Navigation'
import Bio from '../components/Bio'
import Education from '../components/Education'
import Work from '../components/Work'

// prettier-ignore
const Head = () => (
  <Helmet>
    <title>Markus Ylisiurunen</title>
    <meta name='theme-color' content="#ffffff" />
    <link rel="stylesheet" href="https://maxcdn.icons8.com/fonts/line-awesome/1.1/css/line-awesome-font-awesome.min.css" />
  </Helmet>
)

// prettier-ignore
const IndexPage = ({ data }) => (
  <>
    <Head />
    <div css={`padding: 16px; max-width: 560px; margin: 0 auto;`}>
      <div css={`margin-top: 16px;`}>
        <Navigation/>
      </div>
      <div css={`margin-top: 56px;`}>
        <Bio />
      </div>
      <div css={`margin-top: 48px;`}>
        <h2>Education</h2>
        {data.allEducationJson.edges.map(({ node }) => (
          <Education {...node} key={node.school} />
        ))}
      </div>
      <div css={`margin-top: 48px;`}>
        <h2>Work</h2>
        {data.allWorkJson.edges.map(({ node }) => (
          <Work {...node} key={node.employer} />
        ))}
      </div>
    </div>
  </>
)

export default IndexPage

export const query = graphql`
  {
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
            href
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
            href
          }
        }
      }
    }
  }
`
