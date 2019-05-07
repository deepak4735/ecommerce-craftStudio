import styled from 'styled-components';

export const CreateProductTypeContainer = styled.div`
  grid-area: main;
  background: ${props => props.theme.secondary};
  padding: ${props => props.theme.defaultPadding};
  padding-top: 0;
  overflow-y: scroll;
`;

export const FormContainer = styled.form`
  display: grid;
  grid-template-columns: 60% 40%;
  grid-template-rows: auto;
  grid-template-areas: 'textArea booleanArea';
`;
export const TextAreaContainer = styled.div`
  grid-area: textArea;
  display: flex;
  flex-direction: column;
`;
export const BooleanAreaContainer = styled.div`
  grid-area: booleanArea;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
