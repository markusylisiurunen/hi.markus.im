/**
 * @overview Styled components for the attachment component.
 */

import styled from 'styled-components';

const DownloadIcon = styled.i`
  color: rgba(0, 0, 0, 0);
  font-size: 24px !important;
  position: absolute;
  right: 16px;
  top: calc(50% - 4px);
  transform: translateY(-50%);
  transition: top 225ms ease-in-out, color 225ms linear;
`;

const Container = styled.a`
  align-items: center;
  border-radius: 6px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  cursor: pointer;
  display: flex;
  font-family: 'Noto Sans', sans-serif;
  margin-bottom: 8px;
  padding: 12px 8px;
  position: relative;

  &:last-child {
    margin-bottom: 0;
  }

  &:hover ${DownloadIcon} {
    color: rgba(0, 0, 0, 0.33);
    top: 50%;
  }
`;

const FileTypeIcon = styled.i`
  font-size: 32px !important;
  margin-right: 8px;

  &.fa-file-pdf-o {
    color: #c30909;
  }
`;

export default { Container, FileTypeIcon, DownloadIcon };
