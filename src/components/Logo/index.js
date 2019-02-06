import React from 'react'
import styled from 'styled-components'
import colors from '../../utils/colors'

const Svg = styled.svg`
  fill: ${colors.textHard};
  height: ${p => parseInt(p.height, 10)}px;
`

const Logo = props => (
  <Svg viewBox="0 0 417 356" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x="8" y="8" width="120" height="340" />
    <path d="M409 348H269L409 148V348Z" />
    <path d="M409 8H287L193.5 134.5L128 8H116L234 247L409 8Z" />
  </Svg>
)

export default Logo
