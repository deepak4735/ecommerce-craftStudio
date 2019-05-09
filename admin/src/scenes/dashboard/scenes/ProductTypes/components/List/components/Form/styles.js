import styled from 'styled-components';

export const FormContainer = styled.div`
  width: 50rem;
  height: 50rem;
  border-radius: ${props => props.theme.defaultBorderRadius}
  background: white;
  display: flex;
  flex-direction: column;
`;
