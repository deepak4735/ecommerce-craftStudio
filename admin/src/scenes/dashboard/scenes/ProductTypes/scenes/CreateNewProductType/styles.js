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
  grid-template-areas: 'leftArea rightArea';
`;
export const LeftAreaContainer = styled.div`
  grid-area: leftArea;
  display: flex;
  flex-direction: column;
`;
export const RightAreaContainer = styled.div`
  grid-area: rightArea;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
