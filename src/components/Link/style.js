/**
 * @overview Styled components for links.
 */

import styled from 'styled-components';

/** Styled text of the link. */
const Text = styled.span`
  display: inline-block;
`;

/** Arrow icon at the end of the link. */
const Arrow = styled.i`
  display: inline-block;
  margin-left: 4px;
  transition: transform 275ms ease-in-out;
`;

/** Base class for a link. */
const Link = styled.a`
  color: ${p => p.color};
  text-decoration: none;
  transition: color 275ms linear;

  &:hover {
    color: ${p => p.hoverColor || p.color};

    ${Text} {
      text-decoration: underline;
    }

    ${Arrow} {
      transform: translateX(4px);
    }
  }
`;

/** Inline link. */
const LinkInline = styled(Link)``;

/** Block link. */
const LinkBlock = styled(Link)`
  align-items: center;
  display: flex;
  margin: 0 0 8px 0;
  padding: 6px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export default { Text, Arrow, LinkInline, LinkBlock };
