import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { mapFileTypeToIcon } from './utils'
import { Container, FileTypeIcon } from './style'

const Attachment = ({ type, name, fileName }) => (
  <StaticQuery
    query={graphql`
      query AttachmentQuery {
        allFile(filter: { sourceInstanceName: { eq: "attachments" } }) {
          edges {
            node {
              name
              extension
              publicURL
            }
          }
        }
      }
    `}
    render={data => (
      <Container
        href={
          data.allFile.edges
            .map(({ node }) => node)
            .find(
              ({ name, extension }) => extension === type && name === fileName
            ).publicURL
        }
        download
      >
        <FileTypeIcon className={`fa ${mapFileTypeToIcon(type)}`} />
        <span>{`${name} (.${type})`}</span>
      </Container>
    )}
  />
)

export default Attachment
