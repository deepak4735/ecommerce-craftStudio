import React, { Component } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
// import ImageGallery from 'react-image-gallery';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

// Import icons
import AddAPhoto from '@material-ui/icons/AddAPhoto';

import 'react-image-gallery/styles/css/image-gallery.css';

// Import components
import { Container } from '../../../../../../components/Container/Container';
import ImageGallery from '../../../../../../components/ImageGallery/imageGallery';

// Import styles
import {
  CreateProductContainer,
  HeaderContainer,
  StepContainer,
  CreateProductForm,
  RightSideContainer,
  LeftSideContainer,
  Input,
  Label,
  TextArea,
  Select
} from './styles';

// GraphQL Mutation
const CREATE_PRODUCT_MUTATION = gql`
  mutation CREATE_PRODUCT_MUTATION(
    $title: String!
    $description: String!
    $price: Int!
    $available: Boolean!
    $productImages: [ProductImageCreateWithoutProductInput!]
  ) {
    createProduct(
      title: $title
      description: $description
      price: $price
      available: $available
      productImages: { create: $productImages }
    ) {
      id
      title
      description
      price
      available
      productImages {
        title
        product {
          title
        }
      }
    }
  }
`;

class CreateNewProduct extends Component {
  state = {
    title: '',
    description: '',
    price: 0,
    stock: 0,
    category: '',
    available: false,
    productImages: [],
    loading: false,
    createComplete: false,
    currStep: 1,
    totalSteps: 2
  };

  handleUploadImage = async e => {
    const files = e.target.files;
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', 'craftstudio');

    this.setState({
      loading: true
    });
    const res = await fetch(
      'https://api.cloudinary.com/v1_1/diwu3yx6a/image/upload',
      {
        method: 'POST',
        body: data
      }
    );
    const file = await res.json();

    this.setState(prevState => ({
      productImages: [
        ...prevState.productImages,
        {
          title: file.original_filename,
          image: file.secure_url,
          largeImage: file.eager[0].secure_url,
          thumbnail: file.eager[1].secure_url
        }
      ]
    }));
    this.setState({
      loading: false
    });
  };

  handleInput = e => {
    const name = e.target.id;
    const value = e.target.value;

    name === 'available'
      ? this.setState({ [name]: !this.state.available })
      : name === 'price'
      ? this.setState({
          [name]: parseInt(value)
        })
      : this.setState({
          [name]: value
        });
  };
  render() {
    const {
      title,
      description,
      price,
      available,
      productImages,
      currStep,
      totalSteps
    } = this.state;

    console.log(productImages);
    return (
      <CreateProductContainer>
        <HeaderContainer>
          <h3>Create product</h3>
          <StepContainer>
            <p>
              Step {currStep} of {totalSteps}
            </p>
          </StepContainer>
        </HeaderContainer>
        <CreateProductForm>
          <LeftSideContainer>
            <Container
              flexDirection='column'
              height='6rem'
              // alignmentAlign='space-around'
            >
              <Label flexBasis='45%' htmlFor='title'>
                Product title
              </Label>
              <Input
                width='70%'
                flexBasis='55%'
                type='text'
                id='title'
                placeholder='Enter the product title'
                onChange={e => this.handleInput(e)}
              />
            </Container>
            <Container
              flexDirection='column'
              height='12rem'
              alignmentAlign='space-around'
              margin='2rem 0 0 0'
            >
              <Label flexBasis='35%' htmlFor='description'>
                Product description
              </Label>
              <TextArea
                flexBasis='55%'
                width='70%'
                cols='30'
                rows='5'
                id='description'
                type='textarea'
                onChange={e => this.handleInput(e)}
              />
            </Container>
            <Container
              flexDirection='column'
              height='27rem'
              margin='1rem 0 0 0'
              width='70%'
              style={{ overflow: 'hidden' }}
              // alignmentAlign='space-around'
            >
              <ImageGallery />
            </Container>
          </LeftSideContainer>
          <RightSideContainer>
            <Container
              flexDirection='column'
              height='6rem'
              // alignmentAlign='space-around'
            >
              <Label flexBasis='45%' htmlFor='price'>
                Product price
              </Label>
              <Container alignmentJustify='space-between'>
                <Input
                  flexBasis='80%'
                  width='80%'
                  type='number'
                  id='price'
                  defaultValue={0}
                  onChange={e => this.handleInput(e)}
                />
                <p>DKK</p>
              </Container>
            </Container>
            <Container
              flexDirection='column'
              height='6rem'
              margin='2rem 0 0 0'
              // alignmentAlign='space-around'
            >
              <Label flexBasis='50%' htmlFor='category'>
                Product category
              </Label>
              <Select id='category' flexBasis='50%' width='80%'>
                <option>Test</option>
                <option>Test</option>
                <option>Test</option>
              </Select>
            </Container>
          </RightSideContainer>
        </CreateProductForm>
      </CreateProductContainer>
    );
  }
}

export default withRouter(CreateNewProduct);

// <Mutation
//   mutation={CREATE_PRODUCT_MUTATION}
//   variables={{
//     title,
//     description,
//     price,
//     available,
//     productImages
//   }}
// >
//   {(createProduct, { loading, error }) => (
//     <CreateProductForm
//       onSubmit={async e => {
//         e.preventDefault();
//         const res = await createProduct();
//         console.log(res);
//         console.log(error);
//       }}
//     >
//       <BreadCrumbsContainer>
//         <p style={{ fontSize: '1rem' }}>{this.props.location.pathname}</p>
//       </BreadCrumbsContainer>
//       <ImageGalleryContainer>
//         <ImageGallery />
//       </ImageGalleryContainer>
//       <fieldset disabled={loading}>
//         <UploadImagesContainer>
//           <ElementsContainer
//             flex='0 1 25%'
//             flexDirection='row'
//             justifyContent='center'
//             alignItems='center'
//           >
//             <Label htmlFor='file' style={{ cursor: 'pointer' }}>
//               <AddAPhoto style={{ height: '2em', width: '2em' }} />
//             </Label>
//             <Input
//               type='file'
//               style={{ visibility: 'hidden', position: 'absolute' }}
//               onChange={e => this.handleUploadImage(e)}
//               id='file'
//             />
//           </ElementsContainer>
//           <ElementsContainer
//             flex='0 1 70%'
//             flexDirection='column'
//             justifyContent='center'
//           >
//             {this.state.loading === false ? (
//               <p>Select an image for upload</p>
//             ) : (
//               <p>Uploading...</p>
//             )}
//           </ElementsContainer>
//         </UploadImagesContainer>
//         <ProductInformationContainer>
//           <ElementsContainer flex='0 1 15%' flexDirection='column'>
//             <Label htmlFor='title'>Title</Label>
//             <Input
//               type='text'
//               id='title'
//               onChange={e => this.handleInput(e)}
//               required
//               placeholder='Enter a product title'
//             />
//           </ElementsContainer>
//           <ElementsContainer flex='0 1 35%' flexDirection='column'>
//             <Label htmlFor='description'>Description</Label>
//             <TextArea
//               placeholder='Enter a product description...'
//               required
//               cols='30'
//               rows='5'
//               type='textarea'
//               id='description'
//               onChange={e => this.handleInput(e)}
//             />
//           </ElementsContainer>
//           <ElementsContainer
//             flex='0 1 20%'
//             flexDirection='row'
//             justifyContent='space-between'
//           >
//             <ElementsContainer
//               flex='0 1 45%'
//               width='45%'
//               flexDirection='column'
//             >
//               <Label htmlFor='price'>Price</Label>
//               <Input
//                 type='number'
//                 id='price'
//                 placeholder={0}
//                 required
//                 onChange={e => this.handleInput(e)}
//               />
//             </ElementsContainer>
//             <ElementsContainer
//               flex='0 1 45%'
//               width='45%'
//               flexDirection='column'
//             >
//               <Label htmlFor='stock'>Stock</Label>
//               <Input
//                 type='number'
//                 id='stock'
//                 placeholder={0}
//                 required
//                 onChange={e => this.handleInput(e)}
//               />
//             </ElementsContainer>
//           </ElementsContainer>
//           <ElementsContainer
//             flex='0 1 10%'
//             flexDirection='row'
//             justifyContent='space-between'
//           >
//             <ElementsContainer flex='0 1 45%' flexDirection='column'>
//               <Label htmlFor='category'>Category</Label>
//               <Select
//                 id='category'
//                 onChange={e => this.handleInput(e)}
//                 defaultValue='pleace select a value'
//               >
//                 <option>Furniture</option>
//                 <option>Accesories</option>
//               </Select>
//             </ElementsContainer>
//             <ElementsContainer flex='0 1 45%' flexDirection='column'>
//               <Label htmlFor='available'>Available</Label>
//               <Input
//                 type='checkbox'
//                 id='available'
//                 defaultChecked={this.state.available}
//                 required
//                 onChange={e => this.handleInput(e)}
//               />
//             </ElementsContainer>
//           </ElementsContainer>
//         </ProductInformationContainer>
//         <CreateProduct>
//           <CreateButton>Create new product</CreateButton>
//         </CreateProduct>
//       </fieldset>
//     </CreateProductForm>
//   )}
// </Mutation>
