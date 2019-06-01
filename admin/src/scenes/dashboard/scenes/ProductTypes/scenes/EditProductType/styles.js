import styled from 'styled-components';

export const EditProductTypeContainer = styled.div`
  grid-area: main;
  background: ${props => props.theme.secondary};
  padding-right: ${props => props.theme.defaultPadding};
  padding-top: ${props => props.theme.defaultPadding};
  padding-left: ${props => props.theme.defaultPadding};
  padding-bottom: ${props => props.theme.defaultPadding};
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: space-between;
`;

export const LeftSideContainer = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
`;
export const RightSideContainer = styled.div`
  width: 35%;
  display: flex;
  flex-direction: column;
  border: 1px solid red;
`;

export const ElementsContainer = styled.div`
  display: flex;
  width: ${props => props.width};
  flex-direction: ${props => props.flexDirection};
  flex: 0 1 ${props => props.flexBasis};
  justify-content: ${props => props.justifyContent};
`;
