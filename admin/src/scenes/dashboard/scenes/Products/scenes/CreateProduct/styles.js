import styled from 'styled-components';

export const CreateProductForm = styled.form`
  grid-area: main;
  background: ${props => props.theme.primary};
  padding-right: ${props => props.theme.defaultPadding};
  padding-left: ${props => props.theme.defaultPadding};
  display: grid;
  grid-template-columns: 60% 40%;
  grid-template-rows: 2rem 4fr 1fr;
  grid-template-areas:
    'breadCrumbs whiteSpace'
    'imageGallery productInformation'
    'UploadImagesContainer createProduct';
`;

/*
  Only for visual test
*/
export const BreadCrumbsContainer = styled.div`
  grid-area: breadCrumbs;
  /* border: 1px solid black; */
`;

/*
  Containers
*/
export const ImageGalleryContainer = styled.div`
  grid-area: imageGallery;
  display: flex;
  /* flex-direction: column; */
  justify-content: flex-start;
  align-items: center;

  padding: 1rem;

  .create-product__image-gallery {
    width: 100%;
  }
  /* border: 1px solid red; */
`;

export const UploadImagesContainer = styled.div`
  grid-area: UploadImagesContainer;
  display: flex;
  /* border: 1px solid blue; */
`;

export const ProductInformationContainer = styled.div`
  grid-area: productInformation;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* border: 1px solid slateblue; */
`;

export const CreateProduct = styled.div`
  grid-area: createProduct;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid goldenrod; */
`;

export const CreateButton = styled.button`
  width: 17rem;
  height: 3rem;
  background: ${props => props.theme.darkSecondary};
  color: white;
  border-radius: 0.35rem;
  cursor: pointer;
`;

/*
  Product information
*/
export const Label = styled.label`
  flex: 0 1 3rem;
  font-size: 1.3rem;
  font-weight: 550;
  text-transform: uppercase;
  /* border: 1px solid sandybrown; */
`;

export const Input = styled.input`
  flex: 0 1 4rem;
  border-radius: 0.32rem;
  padding: 0 1rem 0 1rem;
  border: 1px solid lightgray;
  /* border: 1px solid yellowgreen; */
`;

export const Select = styled.select`
  flex: 0 1 4rem;
  border-radius: 0.32rem;
  padding: 0 1rem 0 1rem;
  border: 1px solid lightgray;
`;

export const TextArea = styled.textarea`
  flex: 1;
  outline: none;
  padding: 1rem;

  border-radius: 0.32rem;

  resize: none;
  overflow: auto;
  outline-color: transparent;
  border: 1px solid lightgray;
`;

export const ElementsContainer = styled.div`
  /* width: ${props => `${props.width}`}; */
  /* height: ${props => `${props.height}`}; */
  flex: ${props => `${props.flex}`};
  display: flex;
  justify-content: ${props => `${props.justifyContent}`};
  align-items: ${props => `${props.alignItems}`};
  flex-direction: ${props => `${props.flexDirection}`};
`;
