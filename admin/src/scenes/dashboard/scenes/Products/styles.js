import styled from 'styled-components';

export const ProductContainer = styled.div`
  grid-area: main;

  width: 100%;
  height: 100%;
  padding-left: ${props => props.theme.defaultPadding};
  padding-right: ${props => props.theme.defaultPadding};
  border: 1px solid black;
  display: flex;
  background: ${props => props.theme.primary};
`;
