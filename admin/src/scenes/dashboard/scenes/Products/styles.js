import styled from 'styled-components';

export const ProductContainer = styled.div`
  grid-area: main;
  width: 100%;
  height: 100%;
  background: white;

  display: grid;

  background: ${props => props.theme.primary};

  grid-template-rows: 8% 92%;
  grid-template-areas:
    'header'
    'productsList';

  padding-right: ${props => props.theme.defaultPadding};
  /* border: 1px solid black; */

  /* overflow: hidden; */
`;

/*
  Header Area
  #########################################
*/

export const ProductHeader = styled.h2`
  color: ${props => props.theme.headers};
  margin: 0;
  padding-left: 1rem;
`;

export const CreateNewProductBtn = styled.button`
  background: transparent;
  width: 16rem;
  height: 3.7rem;
  border: 1px solid ${props => props.theme.headers};
  border-radius: ${props => props.theme.defaultBorderRadius};
  cursor: pointer;

  a {
    color: ${props => props.theme.paragraphs};
  }

  :hover {
    background: ${props => props.theme.headers};

    a {
      color: white;
    }
  }
`;

// Product Area
export const ProductListContainer = styled.div`
  grid-area: productsList;
  display: grid;
  justify-content: flex-start;
  grid-template-columns: repeat(auto-fit, 18rem); /* Where the magic happens */
  grid-auto-rows: 25rem;
  grid-gap: 2rem;
  margin-top: 2rem;
  padding-left: 1rem;
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
