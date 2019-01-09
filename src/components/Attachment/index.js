/**
 * @overview Attachment component.
 */

import React from 'react';
import Styled from './style';

const { Container } = Styled;

const mapFileTypeToIcon = fileType =>
  ({ pdf: 'fa-file-pdf-o' }[fileType] || null);

const Attachment = ({ type, name, href }) => {
  const fileIcon = mapFileTypeToIcon(type);

  return (
    <Container>
      <i className={`fa ${fileIcon}`} />
      <span>{name}</span>
    </Container>
  );
};

export default Attachment;
