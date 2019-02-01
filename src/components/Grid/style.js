import styled from 'styled-components'

// TODO: These breakpoints could be dynamic
const breakpoints = { md: 768, lg: 1025 }

const width = spanRaw => {
  const span = typeof spanRaw === 'string' ? parseInt(spanRaw, 10) : spanRaw
  return `width: ${(span / 12) * 100}%;`
}

export const StyledContainer = styled.div`
  margin: 0 auto;
  max-width: 1120px;
  padding: 16px;
`

export const StyledRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -8px;
`

export const StyledColumn = styled.div`
  display: block;
  flex: 0 0 auto;
  padding: 0 8px;
  ${({ spanXs }) => width(spanXs || 12)}

  @media screen and (min-width: ${breakpoints.md}px) {
    ${({ spanMd }) => spanMd && width(spanMd)}
  }

  @media screen and (min-width: ${breakpoints.lg}px) {
    ${({ spanLg }) => spanLg && width(spanLg)}
  }
`
