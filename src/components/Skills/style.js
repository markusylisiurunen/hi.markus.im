import styled from 'styled-components'
import colors from '../../utils/colors'

// TODO: Improve this... :()
const breakpoints = { md: 768, lg: 1025 }

export const Container = styled.div`
  display: grid;
  grid-template-columns: 100%;
  margin-bottom: -32px;

  @media screen and (min-width: ${breakpoints.md}px) {
    grid-template-columns: 33% 33% auto;
    margin-bottom: -16px;
  }
`

export const Item = styled.div`
  margin-bottom: 32px;

  @media screen and (min-width: ${breakpoints.md}px) {
    margin-bottom: 16px;

    &:nth-child(3n + 1) {
      padding-right: 8px;
    }

    &:nth-child(3n + 2) {
      padding-left: 4px;
      padding-right: 4px;
    }

    &:nth-child(3n) {
      padding-left: 8px;
    }
  }
`

export const Title = styled.h3`
  color: ${colors.textSoft};
  font-size: 1em;
  font-weight: 400;
  margin-bottom: 8px;
  margin-top: 0;
`

export const SkillLevel = styled.span`
  background-color: ${colors.backgroundBlack};
  border-radius: 4px;
  color: ${colors.textWhite};
  font-size: 0.8em;
  font-weight: 600;
  left: 50%;
  opacity: 0;
  padding: 2px 6px;
  pointer-events: none;
  position: absolute;
  top: -20px;
  transform: translateX(-50%);
  transition: transform 275ms ease-in-out, opacity 275ms linear;
`

export const SkillName = styled.span`
  opacity: ${p => (p.level - 1) * 0.25 + 0.5};

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`

export const Skill = styled.span`
  color: ${colors.textHard};
  display: inline-block;
  margin-right: 4px;
  position: relative;

  &:after {
    content: ',';
  }

  &:last-child:after {
    content: '';
  }

  &:hover ${SkillLevel} {
    opacity: 1;
    transform: translateX(-50%) translateY(-4px);
  }
`

export const Explainer = styled.p`
  color: ${colors.textSoft};
  margin-bottom: 0;
  margin-top: 40px;
`
