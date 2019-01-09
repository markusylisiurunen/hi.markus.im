/**
 * @overview Styled components for an education card.
 */

import styled from 'styled-components';

const Container = styled.div`
  margin-top: 16px;
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 6px;
  padding: 12px;
`;

const Name = styled.h3`
  font-size: 1em;
  font-weight: 700;
  line-height: 1.45;
  margin-bottom: 4px;
  margin-top: 0;
`;

const Email = styled.a`
  color: rgba(0, 0, 0, 0.4);
  text-decoration: underline;
  transition: color 375ms 0ms ease-in-out;

  &:hover {
    color: #e8475d;
  }
`;

const Header = styled.p`
  font-family: 'Noto Sans', sans-serif;
  font-weight: 700;
  margin-bottom: 4px;
  margin-top: 16px;
`;

const SocialLink = styled.a`
  color: rgba(0, 0, 0, 0.4);
  display: inline-block;
  margin-right: 8px;
  text-decoration: underline;
  transition: color 375ms 0ms ease-in-out;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    color: #3e7ab2;
  }
`;

export default { Container, Name, Email, Header, SocialLink };
