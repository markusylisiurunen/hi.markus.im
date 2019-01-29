import styled from 'styled-components'
import colors from '../../utils/colors'

export const Container = styled.div`
  margin-bottom: 32px;

  &:last-child {
    margin-bottom: 0;
  }
`

export const Employer = styled.h3`
  font-size: 1em;
  font-weight: 700;
  line-height: inherit;
  margin-bottom: 4px;
  margin-top: 0;
`

export const JobTitle = styled.p`
  margin-bottom: 4px;
  margin-top: 0;
`

export const Dates = styled.p`
  color: ${colors.textSoft};
  margin-bottom: 16px;
  margin-top: 0;
`

export const Description = styled.p`
  &:last-child {
    margin-bottom: 0;
  }
`
