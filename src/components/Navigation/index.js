import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Container, Logo } from './style'

import Link from '../Link'

const Navigation = ({ data }) => (
  <Container>
    <Logo>M</Logo>
    <Link href={`mailto:${data.site.siteMetadata.email}`} block>
      Say hi
    </Link>
  </Container>
)

const navigationQuery = graphql`
  query NavigationQuery {
    site {
      siteMetadata {
        email
      }
    }
  }
`

export default ({ props }) => (
  <StaticQuery
    query={navigationQuery}
    render={data => <Navigation data={data} {...props} />}
  />
)
