import styled from 'styled-components';

export const ProductTypeContainer = styled.div`
  grid-area: main;
  background: ${props => props.theme.secondary};
  padding: ${props => props.theme.defaultPadding};
  padding-top: 0;
  height: 100%;
`;

export const FormContainer = styled.form`
  display: grid;
  height: 100%;
  grid-template-columns: 60% 40%;
  grid-template-rows: 100%;
  grid-template-areas:
    'leftArea rightArea'
    'leftArea btn';
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

export const SubmitOrDelete = styled.div`
  grid-area: btn;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
