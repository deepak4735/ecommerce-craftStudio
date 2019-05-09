import styled from 'styled-components';

export const ListContainer = styled.div`
  grid-area: ${props => props.listGridArea};
  border-radius: ${props => props.theme.defaultBorderRadius};
  height: ${props => props.height};
  width: ${props => props.width};
  display: grid;
  grid-template-rows: 5rem 1fr;
  grid-template-areas:
    'headers'
    'products';
`;

// Header
export const ListHeaders = styled.div`
  grid-area: headers;
  background: ${props => props.theme.headers}
  border-radius: ${props => props.theme.defaultBorderRadius} ${props =>
  props.theme.defaultBorderRadius} 0 0;
  max-width: 100%;
  min-width: 100%;
  /* padding: 1rem; */
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  border-bottom: 0.3rem solid ${props => props.theme.accentTwo};

  :first-child {
    padding-left: 0.5rem;
  }

  p:nth-child(1) {
    width: 30%;
  }

  p:nth-child(2) {
    width: 60%;
  }

  p:nth-child(3) {
    width: 10%;
  }

  .list__withAddBtn {
    display: flex;
    justify-content: center;

    a
    :hover {
      color: green;
    }
  }
`;

export const HeaderItem = styled.p`
  /* color: ${props => props.theme.paragraphs} */
  color: white;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 1.2rem;
  /* max-width: 6rem;
  min-width: 6rem; */
  margin: 0;
`;

// List items
export const ProductList = styled.div`
  grid-area: products;
  /* padding-left: 0.5rem; */
  background: ${props => props.theme.headers};
  /* border: 1px solid cornflowerblue; */
  :first-child {
    padding-left: 0.5rem;
  }
  min-height: 25rem;
  max-height: 25rem;

  overflow-y: scroll;

  border-radius: 0 0 ${props => props.theme.defaultBorderRadius}
    ${props => props.theme.defaultBorderRadius};
`;
