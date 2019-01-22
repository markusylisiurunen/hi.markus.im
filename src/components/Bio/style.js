/**
 * @overview Styled components for the bio.
 */

import styled from 'styled-components';
import bp from '../../utils/breakpoints';

const Name = styled.h1`
  font-size: 3.6em;
  margin-bottom: 24px;

  @media screen and (min-width: ${bp.tablet}) {
    font-size: 3.6em;
    margin-bottom: 32px;
  }

  @media screen and (min-width: ${bp.laptop}) {
    font-size: 4.4em;
  }
`;

const SocialContainer = styled.div`
  display: block;
  margin-bottom: 24px;

  @media screen and (min-width: ${bp.tablet}) {
    margin-bottom: 0;
  }
`;

const Social = styled.a`
  align-items: center;
  color: rgba(0, 0, 0, 0.5);
  display: flex;
  margin: 0 0 4px 0;
  padding: 4px 0;
  text-decoration: none;
  transform: translateX(0px);
  transition: color 275ms linear, transform 275ms ease-in-out;

  &:hover {
    color: ${p => p.color};
    transform: translateX(4px);
  }
`;

const SocialIcon = styled.i`
  font-size: 1.5em !important;
  margin-right: 6px;
`;

const Intro = styled.p`
  &:last-child {
    margin-bottom: 0;
  }

  @media screen and (min-width: ${bp.tablet}) {
    &:first-child {
      margin-top: 16px;
    }
  }
`;

export default { Name, SocialContainer, Social, SocialIcon, Intro };
