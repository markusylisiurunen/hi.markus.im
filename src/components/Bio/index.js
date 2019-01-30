import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Name, Intro, SocialsContainer } from './style'
import colors from '../../utils/colors'

import Link from '../Link'

const Bio = ({ data }) => (
  <div>
    <Name>Markus Ylisiurunen</Name>
    <div>
      {data.allCvJson.edges[0].node.intro.map(intro => (
        <Intro key={intro}>{intro}</Intro>
      ))}
    </div>
    <SocialsContainer>
      {data.allCvJson.edges[0].node.socials.map(social => (
        <Link
          href={social.href}
          color={colors.textSoft}
          hoverColor={social.color}
          block
          css={`
            padding-left: 0;
          `}
        >
          {social.name}
        </Link>
      ))}
    </SocialsContainer>
  </div>
)

const bioQuery = graphql`
  query BioQuery {
    allCvJson {
      edges {
        node {
          intro
          socials {
            name
            color
            href
          }
        }
      }
    }
  }
`

export default ({ props }) => (
  <StaticQuery
    query={bioQuery}
    render={data => <Bio data={data} {...props} />}
  />
)
