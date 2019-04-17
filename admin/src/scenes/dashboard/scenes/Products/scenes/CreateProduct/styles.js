import styled from 'styled-components';

/*
  Containers
*/

export const CreateProductContainer = styled.div`
  grid-area: main;
  display: grid;
  background: ${props => props.theme.primary};
  padding-right: ${props => props.theme.defaultPadding};

  grid-template-rows: 7rem auto;
  grid-template-areas:
    'header'
    'formArea';
  overflow-y: hidden;
`;

export const HeaderContainer = styled.div`
  grid-area: header;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  h3 {
    margin: 0;
    color: ${props => props.theme.headers};
  }
`;

export const StepContainer = styled.div`
  p {
    font-size: 1.7rem;
  }
`;

export const LeftSideContainer = styled.div`
  grid-area: left;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
`;

export const RightSideContainer = styled.div`
  grid-area: right;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

/*
  Form container
*/

export const CreateProductForm = styled.form`
  background: ${props => props.theme.secondary};
  border-radius: ${props => props.theme.defaultBorderRadius};
  grid-area: formArea;

  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-areas: 'left right';

  padding: ${props => props.theme.defaultPadding};
`;

/*
  Label and input fields
*/
export const Label = styled.label`
  flex: 0 1 ${props => props.height};
  color: ${props => props.theme.headers};
`;

export const Input = styled.input`
  flex: 0 1 ${props => props.height};
  background: ${props => props.theme.secondary};
  width: 70%;
  border: none;
  border-bottom: 1px solid ${props => props.theme.headers};
  padding: 0;
  color: ${props => props.theme.paragraphs};
  font-size: 100%;
`;

export const ImageGalleryContainer = styled.div`
  grid-area: imageGallery;
  overflow: hidden;
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
// export const Label = styled.label`
//   flex: 0 1 3rem;
//   font-size: 1.3rem;
//   font-weight: 550;
//   text-transform: uppercase;
//   /* border: 1px solid sandybrown; */
// `;

// export const Input = styled.input`
//   flex: 0 1 4rem;
//   border-radius: 0.32rem;
//   padding: 0 1rem 0 1rem;
//   /* border: 1px solid lightgray; */
//   /* border: 1px solid yellowgreen; */
// `;

export const Select = styled.select`
  flex: 0 1 4rem;
  border-radius: 0.32rem;
  padding: 0 1rem 0 1rem;
  /* border: 1px solid lightgray; */
`;

export const TextArea = styled.textarea`
  flex: 1;
  outline: none;
  padding: 1rem;

  border-radius: 0.32rem;

  resize: none;
  overflow: auto;
  outline-color: transparent;
`;

export const ElementsContainer = styled.div`
  width: ${props => `${props.width}`};
  /* height: ${props => `${props.height}`}; */
  flex: ${props => `${props.flex}`};
  display: flex;
  justify-content: ${props => `${props.justifyContent}`};
  align-items: ${props => `${props.alignItems}`};
  flex-direction: ${props => `${props.flexDirection}`};
`;
