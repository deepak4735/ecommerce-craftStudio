import styled from 'styled-components';

export const ProductTypesContainer = styled.div`
  grid-area: main;
  width: 100%;
  height: 100%;
  background: white;
  display: flex;
  background: ${props => props.theme.secondary};
  padding-right: ${props => props.theme.defaultPadding};
  padding-left: ${props => props.theme.defaultPadding};
  padding-bottom: ${props => props.theme.defaultPadding};
  padding-top: ${props => props.theme.defaultPadding};
  justify-content: space-between;
`;

export const CreateProductTypeBtn = styled.button`
  background: transparent;
  width: 16rem;
  height: 3.7rem;
  border: 1px solid ${props => props.theme.headers};
  border-radius: ${props => props.theme.defaultBorderRadius};
  cursor: pointer;
  /* align-self: flex-start; */

  a {
    color: ${props => props.theme.paragraphs};
  }

  :hover {
    background: ${props => props.theme.headers};
    color: white;

    a {
      color: white;
    }
  }
`;
