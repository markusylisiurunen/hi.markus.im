/**
 * @overview Component for showing and downloading an attachment.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { mapFileTypeToIcon } from './utils';
import Styled from './style';

const { Container, FileTypeIcon, DownloadIcon } = Styled;

const Attachment = ({ type, name, href }) => (
  <Container>
    <FileTypeIcon className={`fa ${mapFileTypeToIcon(type)}`} />
    <span>
      {name} (.{type})
    </span>
    <DownloadIcon className="fa fa-download" />
  </Container>
);

export default Attachment;
