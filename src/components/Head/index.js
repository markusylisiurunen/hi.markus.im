import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'

const Head = () => (
  <StaticQuery
    query={graphql`
      query HeadQuery {
        allFile(
          filter: {
            sourceInstanceName: { eq: "images" }
            name: { eq: "logo@0.5x" }
          }
        ) {
          edges {
            node {
              publicURL
            }
          }
        }
      }
    `}
    render={data => (
      <Helmet>
        <title>Markus Ylisiurunen</title>
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="google-site-verification"
          content="4l7ZDWTHgsiDpR90hmIqKDr2_9p-ofnBKjjGJh8gygQ"
        />
        <link
          rel="shortcut icon"
          type="image/png"
          href={data.allFile.edges[0].node.publicURL}
        />
        <link
          rel="stylesheet"
          href="https://maxcdn.icons8.com/fonts/line-awesome/1.1/css/line-awesome-font-awesome.min.css"
        />
      </Helmet>
    )}
  />
)

export default Head
