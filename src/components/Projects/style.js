/**
 * @overview Styled components for the projects section.
 */

import styled from 'styled-components';

const Name = styled.h3`
  font-size: 1em;
  font-weight: 700;
  line-height: 1.45;
  margin-bottom: 4px;
  margin-top: 0;
`;

const Technologies = styled.p`
  color: rgba(0, 0, 0, 0.4);
  margin-bottom: 16px;
  margin-top: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Repository = styled.a`
  align-items: center;
  color: rgba(0, 0, 0, 0.5);
  display: flex;
  margin: 0;
  padding: 4px 0;
  text-decoration: none;
  transform: translateX(0px);
  transition: color 275ms linear, transform 275ms ease-in-out;

  &:hover {
    color: #171515;
    transform: translateX(4px);
  }

  i {
    font-size: 1.5em !important;
    margin-right: 6px;
  }
`;

const Description = styled.p`
  height: 64px;
  margin-bottom: 16px;
  overflow: hidden;
`;

export default { Name, Technologies, Repository, Description };
