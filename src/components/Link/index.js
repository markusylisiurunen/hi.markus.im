import React from 'react'
import { LinkBlock, LinkInline, Text, Arrow } from './style'

const Link = ({ block, children, ...props }) =>
  block ? (
    <LinkBlock {...props}>
      <Text>{children}</Text>
      <Arrow className="fa fa-long-arrow-right" />
    </LinkBlock>
  ) : (
    <LinkInline {...props}>
      <Text>{children}</Text>
    </LinkInline>
  )

export default Link
