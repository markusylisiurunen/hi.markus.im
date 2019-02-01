import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Container } from './style'

import Logo from '../Logo'
import Link from '../Link'

const Navigation = ({ data }) => (
  <Container>
    <Logo height="32" />
    <Link href={`mailto:${data.site.siteMetadata.email}`} block>
      {data.site.siteMetadata.email}
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
