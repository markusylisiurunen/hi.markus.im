import styled from 'styled-components'
import colors from '../../utils/colors'

import Link from '../Link'

// TODO: Improve this... :(
const breakpoints = { md: 768, lg: 1025 }

// Grid

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 100%;
  margin: 0 -8px -40px -8px;

  @media screen and (min-width: ${breakpoints.md}px) {
    grid-template-columns: 33% auto 33%;
  }
`

export const GridElement = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  padding: 0 8px;
`

// Project

export const Name = styled.h3`
  font-size: 1em;
  font-weight: 700;
  line-height: inherit;
  margin-bottom: 4px;
  margin-top: 0;
`

export const Keywords = styled.p`
  color: ${colors.textSoft};
  margin-bottom: 8px;
  margin-top: 0;
`

export const Description = styled.p`
  flex-grow: 1;
  margin-bottom: 8px;
  margin-top: 0;
`

export const Repository = styled(Link)`
  color: ${colors.textSoft};
  padding-left: 0;

  &:hover {
    color: ${colors.textHard};
  }
`
