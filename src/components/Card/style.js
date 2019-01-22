/**
 * @overview Styled components for the Card component.
 */

import styled from 'styled-components';
import { propWithDefault } from '../../utils/components';

const Container = styled.div`
  border-radius: 6px;
  border: ${p => propWithDefault(p.border, '1px solid rgba(0, 0, 0, 0.08)')};
  margin-bottom: ${p => propWithDefault(p.marginBottom, '16px')};
  padding: ${p => propWithDefault(p.padding, '12px')};
  position: relative;
  width: 100%;
`;

export default { Container };
