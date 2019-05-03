import styled from 'styled-components';

export const ListContainer = styled.div`
  grid-area: listComponent;
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: 5rem 1fr;
  grid-template-areas:
    'headers'
    'products';
`;

// Header
export const ListHeaders = styled.div`
  grid-area: headers;
  background: ${props => props.theme.primary}
  max-width: 100%;
  /* padding: 1rem; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${props => props.theme.accentTwo};

  :first-child {
    padding-left: 0.5rem;
  }
`;

export const HeaderItem = styled.p`
  flex: 1 1 5rem;
  color: ${props => props.theme.headers}
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
  padding: 1rem;
  background: ${props => props.theme.primary};
  /* border: 1px solid cornflowerblue; */
  :first-child {
    padding-left: 0.5rem;
  }
`;
