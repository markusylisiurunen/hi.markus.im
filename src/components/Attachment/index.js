import React from 'react'
import { mapFileTypeToIcon } from './utils'
import { Container, FileTypeIcon } from './style'

const Attachment = ({ type, name, href }) => (
  <Container href={href || false} download>
    <FileTypeIcon className={`fa ${mapFileTypeToIcon(type)}`} />
    <span>{`${name} (.${type})`}</span>
  </Container>
)

export default Attachment
