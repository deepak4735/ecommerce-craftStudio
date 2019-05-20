import styled from 'styled-components';
import { animated } from 'react-spring';

export const FormContainer = styled(animated.form)`
  width: 55rem;
  height: 40rem;
  left: 10%;
  border-radius: ${props => props.theme.defaultBorderRadius};
  background: ${props => props.theme.secondary};
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

export const CloseBtn = styled.button`
  width: 15%;
  height: 15%;
  border-radius: 50%;
`;

export const FormHeader = styled.h3`
  color: ${props => props.theme.headers};
`;
