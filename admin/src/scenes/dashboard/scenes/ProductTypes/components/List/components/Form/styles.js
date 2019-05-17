import styled from 'styled-components';
import { animated } from 'react-spring';

export const FormContainer = styled(animated.div)`
  width: 30rem;
  height: 40rem;
  border-radius: ${props => props.theme.defaultBorderRadius}
  background: white;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  position: relative;
`;

export const AttributeValue = styled.p`
  margin: 0;
  margin-right: 0.5rem;
  color: ${props => props.theme.paragraphs};
  /* flex: 0 1 4rem; */
  max-height: 3rem;
`;
