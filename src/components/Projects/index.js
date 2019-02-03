import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import {
  GridContainer,
  GridElement,
  Name,
  Keywords,
  Description,
  Repository,
} from './style'

const Project = ({ name, languages, keywords, description, repository }) => (
  <>
    <Name>{name}</Name>
    <Keywords>{keywords.join(', ')}</Keywords>
    <Description>{description}</Description>
    <Repository href={repository.href} block>
      Repository
    </Repository>
  </>
)

const ProjectGrid = () => (
  <StaticQuery
    query={graphql`
      query ProjectGridQuery {
        allProjectsJson {
          edges {
            node {
              name
              keywords
              description
              languages {
                name
                color
                size
              }
              repository {
                name
                href
              }
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <h2>Projects</h2>
        <GridContainer>
          {data.allProjectsJson.edges.map(({ node }) => (
            <GridElement key={node.name}>
              <Project {...node} />
            </GridElement>
          ))}
        </GridContainer>
      </>
    )}
  />
)

export default ProjectGrid
