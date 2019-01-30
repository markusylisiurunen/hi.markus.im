import React from 'react'
import styled from 'styled-components'
import colors from '../../utils/colors'

const Svg = styled.svg`
  fill: ${colors.textHard};
  height: ${p => parseInt(p.height, 10)}px;
  width: ${p => 1.15 * parseInt(p.height, 10)}px;
`

const Logo = props => (
  <Svg viewBox="0 0 115 100" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x="0" y="0" width="33" height="100" />
    <rect x="41" y="0" width="33" height="65" />
    <rect x="82" y="0" width="33" height="100" />
  </Svg>
)

export default Logo
