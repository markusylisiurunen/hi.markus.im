/**
 * @overview Styled components for the Navigation component.
 */

import styled from 'styled-components';
import colors from '../../utils/colors';
import bp from '../../utils/breakpoints';

const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-top: 32px;
  width: 100%;

  @media screen and (min-width: ${bp.laptop}) {
    margin-top: 56px;
  }
`;

const LogoBar = styled.span`
  background-color: ${colors.textHard};
  height: ${props => props.size}px;
  margin-right: 3px;
  width: 11px;
`;

export default { Container, LogoBar };
