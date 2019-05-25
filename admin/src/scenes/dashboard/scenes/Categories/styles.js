import styled from 'styled-components';

export const CategoriesContainer = styled.div`
  grid-area: main;
  width: 100%;
  height: 100%;
  display: flex;
  background: ${props => props.theme.secondary};
  padding-right: ${props => props.theme.defaultPadding};
  padding-left: ${props => props.theme.defaultPadding};
  padding-bottom: ${props => props.theme.defaultPadding};
  border: 1px solid black;
`;
