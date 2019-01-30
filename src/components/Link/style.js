import styled from 'styled-components'
import colors from '../../utils/colors'

export const Text = styled.span`
  display: inline-block;
`

export const Arrow = styled.i`
  display: inline-block;
  margin-left: 4px;
  transition: transform 275ms ease-in-out;
`

export const Link = styled.a`
  color: ${p => p.color || colors.accentPink};
  text-decoration: none;
  transition: color 275ms linear;

  &:hover {
    color: ${p => p.hoverColor || p.color || colors.accentPink};

    ${Text} {
      text-decoration: underline;
    }

    ${Arrow} {
      transform: translateX(4px);
    }
  }
`

export const LinkInline = styled(Link)``

export const LinkBlock = styled(Link)`
  align-items: center;
  display: flex;
  margin: 0 0 8px 0;
  padding: 6px;

  &:last-child {
    margin-bottom: 0;
  }
`
