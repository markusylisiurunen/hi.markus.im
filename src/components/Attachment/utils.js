/**
 * @overview Utility functions for the Attachment component.
 */

export const mapFileTypeToIcon = fileType =>
  ({ pdf: 'fa-file-pdf-o' }[fileType] || '');
