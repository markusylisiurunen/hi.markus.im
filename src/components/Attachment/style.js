import styled from 'styled-components'
import colors from '../../utils/colors'

export const Container = styled.a`
  align-items: center;
  border-radius: 4px;
  border: 1px solid ${colors.borderSoft};
  color: inherit;
  cursor: pointer;
  display: flex;
  margin-bottom: 8px;
  padding: 8px;
  text-decoration: none;

  &:last-child {
    margin-bottom: 0;
  }
`

export const FileTypeIcon = styled.i`
  font-size: 29px !important;
  margin-right: 6px;

  &.fa-file-pdf-o {
    color: ${colors.fileTypePdf};
  }
`
