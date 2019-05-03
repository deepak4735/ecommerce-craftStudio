import styled from 'styled-components';

export const ProductContainer = styled.div`
  grid-area: main;
  width: 100%;
  height: 100%;
  background: white;
  display: grid;
  background: ${props => props.theme.secondary};
  grid-template-rows: 6rem 1fr 3rem;
  grid-template-areas:
    'header'
    'listAndFilter'
    'pagination';

  padding-right: ${props => props.theme.defaultPadding};
  padding-left: ${props => props.theme.defaultPadding};
  padding-bottom: ${props => props.theme.defaultPadding};
  /* border: 1px solid black; */

  /* overflow-y: scroll; */
`;

/*
  Header Area
  #########################################
*/

export const ProductHeader = styled.header`
  grid-area: header;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    margin: 0;
  }
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
    color: white;
  }
`;

// Product Area
export const ListAndFilterContainer = styled.div`
  grid-area: listAndFilter;
  display: grid;
  grid-template-columns: 60% 40%;
  grid-column-gap: 2rem;
  grid-template-areas: 'listComponent filterComponent';
`;

// export const ProductCard = styled.div`
//   display: flex;
//   flex-direction: column;

//   align-content: center;
//   justify-content: space-between;

//   background: white;
//   border-radius: 1rem;
//   box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
// `;

// export const ProductCardHeader = styled.header`
//   flex: 0 1 15%;
// `;

// export const ProductCardImage = styled.div`
//   flex: 0 1 30%;
//   width: 100%;
//   max-height: 30%;

//   img {
//     object-fit: fill;
//     width: 100%;
//     height: 100%;
//   }
// `;

// export const ProductCardDescription = styled.div`
//   flex: 0 1 40%;
// `;

// export const ProductDetailBtnContainer = styled.div`
//   flex: 0 1 15%;
// `;

// export const FilterOptionsContiner = styled.div`
//   grid-area: filterOptions;
//   border: 1px solid black;
// `;
