import React from 'react'
import { StyledContainer, StyledRow, StyledColumn, StyledSpacer } from './style'

const Container = ({ children, ...props }) => (
  <StyledContainer {...props}>{children}</StyledContainer>
)

const Row = ({ children, ...props }) => (
  <StyledRow {...props}>{children}</StyledRow>
)

const Column = ({ children, ...props }) => (
  <StyledColumn {...props}>{children}</StyledColumn>
)

const Spacer = props => <StyledSpacer {...props} />

export default { Container, Row, Column, Spacer }
