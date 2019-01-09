/**
 * @overview Styled components for a project card.
 */

import styled from 'styled-components';

const Name = styled.h3`
  font-size: 1em;
  font-weight: 700;
  line-height: 1.45;
  margin-bottom: 8px;
  margin-top: 0;
`;

const Link = styled.a`
  color: inherit;
  display: block;
  padding: 6px 8px;
  position: absolute;
  right: ${p => p.index * 32 + (p.index + 1) * 4}px;
  text-decoration: none;
  top: 4px;

  i {
    font-size: 21px;
  }
`;

const Technologies = styled.p`
  color: rgba(0, 0, 0, 0.4);
  margin-bottom: 16px;
`;

export default { Name, Link, Technologies };
