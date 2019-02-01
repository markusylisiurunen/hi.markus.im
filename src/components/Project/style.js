import styled from 'styled-components'
import colors from '../../utils/colors'

export const Container = styled.div`
  border-radius: 6px;
  margin-bottom: 16px;
  padding: 16px;
  position: relative;
  border: 1px solid ${colors.borderSoft};
`

export const Name = styled.h3`
  font-size: 1em;
  font-weight: 700;
  line-height: inherit;
  margin-bottom: 4px;
  margin-top: 6px;
`

export const Keywords = styled.p`
  color: ${colors.textSoft};
  margin-bottom: 16px;
  margin-top: 0;
`

export const Description = styled.p`
  margin-bottom: 16px;
  margin-top: 0;
`

export const LanguageContainer = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  left: -1px;
  position: absolute;
  right: -1px;
  top: -1px;
`

export const LanguageLabel = styled.span`
  background-color: ${colors.backgroundBlack};
  border-radius: 4px;
  color: ${colors.textWhite};
  font-size: 0.8em;
  font-weight: 600;
  left: 50%;
  opacity: 0;
  padding: 2px 6px;
  position: absolute;
  top: -24px;
  transform: translateX(-50%);
  transition: transform 275ms ease-in-out, opacity 275ms linear;
`

export const Language = styled.div`
  background-color: ${p => p.color};
  height: 6px;
  position: relative;
  width: ${p => (p.size / p.total) * 100}%;

  &:first-child {
    border-top-left-radius: 6px;
  }

  &:last-child {
    border-top-right-radius: 6px;
  }

  &:hover ${LanguageLabel} {
    opacity: 1;
    transform: translateX(-50%) translateY(-4px);
  }
`
