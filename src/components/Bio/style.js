/**
 * @overview Styled components for the bio.
 */

import styled from 'styled-components';
import colors from '../../utils/colors';
import bp from '../../utils/breakpoints';

import Link from '../Link';

const Name = styled.h1`
  font-size: 3em;
  margin-bottom: 24px;

  @media screen and (min-width: ${bp.tablet}) {
    font-size: 3.2em;
    margin-bottom: 32px;
  }

  @media screen and (min-width: ${bp.laptop}) {
    font-size: 3.6em;
  }
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

const SocialContainer = styled.div`
  margin-top: 32px;

  @media screen and (min-width: ${bp.laptop}) {
    margin-top: 16px;
  }
`;

const SocialLink = styled(Link)`
  color: ${colors.textSoft};
  margin-bottom: 2px;
  padding-left: 0;
`;

export default { Name, Intro, SocialContainer, SocialLink };
