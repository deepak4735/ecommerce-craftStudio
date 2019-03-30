import styled from 'styled-components';

export const ProductContainer = styled.div`
  grid-area: main;
  width: 100%;
  height: 100%;
  background: white;

  display: grid;

  background: #e2e1e0;

  grid-template-columns: 70% 30%;
  grid-template-areas: 'productsList filterOptions';

  border: 1px solid black;

  overflow: hidden;
`;

// Product Area
export const ProductListContainer = styled.div`
  grid-area: productsList;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, 20rem); /* Where the magic happens */
  grid-auto-rows: 30rem;
  grid-gap: 2rem;
  margin: 2rem;
  overflow-y: scroll;
`;

export const ProductCard = styled.div`
  display: flex;
  flex-direction: column;

  align-content: center;
  justify-content: space-between;

  background: white;
  border-radius: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

export const ProductCardHeader = styled.header`
  flex: 0 1 15%;
`;

export const ProductCardImage = styled.div`
  flex: 0 1 30%;
  width: 100%;
  max-height: 30%;

  img {
    object-fit: fill;
    width: 100%;
    height: 100%;
  }
`;

export const ProductCardDescription = styled.div`
  flex: 0 1 40%;
`;

export const ProductDetailBtnContainer = styled.div`
  flex: 0 1 15%;
`;

export const FilterOptionsContiner = styled.div`
  grid-area: filterOptions;
  border: 1px solid black;
`;
