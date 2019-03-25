import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ImageGallery from 'react-image-gallery';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

// Import icons
import AddAPhoto from '@material-ui/icons/AddAPhoto';

import 'react-image-gallery/styles/css/image-gallery.css';

// Import styles
import {
  CreateProductForm,
  BreadCrumbsContainer,
  ImageGalleryContainer,
  ProductInformationContainer,
  UploadImagesContainer,
  CreateProduct,
  Input,
  Label,
  TextArea,
  ElementsContainer,
  CreateButton,
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
      productImages: { create: $productImages, connect: { id: product.id} }
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
    // category: '',
    available: false,
    productImages: []
  };

  handleUploadImage = async e => {
    const files = e.target.files;
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', 'craftstudio');

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
    console.log(file);
    console.log(this.state.productImages);
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
      stock,
      available,
      productImages
    } = this.state;

    console.log(...productImages);
    return (
      <Mutation
        mutation={CREATE_PRODUCT_MUTATION}
        variables={{
          title,
          description,
          price,
          stock,
          available,
          productImages
        }}
      >
        {(createProduct, { loading, error }) => (
          <CreateProductForm
            onSubmit={async e => {
              e.preventDefault();
              const res = await createProduct();
              console.log(res);
              console.log(error);
            }}
          >
            <BreadCrumbsContainer>
              <p style={{ fontSize: '1rem' }}>{this.props.location.pathname}</p>
            </BreadCrumbsContainer>
            <ImageGalleryContainer>
              <ImageGallery
                showPlayButton={false}
                showFullscreenButton={false}
                // defaultImage={'./assets/No_image.png'}
                additionalClass='create-product__image-gallery'
                items={this.state.productImages}
                showNav={false}
              />
            </ImageGalleryContainer>
            <UploadImagesContainer>
              <ElementsContainer
                flex='0 1 25%'
                flexDirection='row'
                justifyContent='center'
                alignItems='center'
              >
                <Label htmlFor='file' style={{ cursor: 'pointer' }}>
                  <AddAPhoto style={{ height: '2em', width: '2em' }} />
                </Label>
                <Input
                  type='file'
                  style={{ visibility: 'hidden', position: 'absolute' }}
                  onChange={e => this.handleUploadImage(e)}
                  id='file'
                />
              </ElementsContainer>
              {/*
          <ElementsContainer
            flex='0 1 70%'
            flexDirection='column'
            justifyContent='center'
          >
            <Input
              type='text'
              required
              id='fileTitle'
              placeholder='Enter an image title'
              onChange={e => this.handleUploadImage(e)}
            />
          </ElementsContainer>
          */}
            </UploadImagesContainer>
            <ProductInformationContainer>
              <ElementsContainer flex='0 1 15%' flexDirection='column'>
                <Label htmlFor='title'>Title</Label>
                <Input
                  type='text'
                  id='title'
                  onChange={e => this.handleInput(e)}
                  required
                  placeholder='Enter a product title'
                />
              </ElementsContainer>
              <ElementsContainer flex='0 1 35%' flexDirection='column'>
                <Label htmlFor='description'>Description</Label>
                <TextArea
                  placeholder='Enter a product description...'
                  required
                  cols='30'
                  rows='5'
                  type='textarea'
                  id='description'
                  onChange={e => this.handleInput(e)}
                />
              </ElementsContainer>
              <ElementsContainer
                flex='0 1 20%'
                flexDirection='row'
                justifyContent='space-between'
              >
                <ElementsContainer flex='0 1 45%' flexDirection='column'>
                  <Label htmlFor='price'>Price</Label>
                  <Input
                    type='number'
                    id='price'
                    placeholder={0}
                    required
                    onChange={e => this.handleInput(e)}
                  />
                </ElementsContainer>
                <ElementsContainer flex='0 1 45%' flexDirection='column'>
                  <Label htmlFor='stock'>Stock</Label>
                  <Input
                    type='number'
                    id='stock'
                    placeholder={0}
                    required
                    onChange={e => this.handleInput(e)}
                  />
                </ElementsContainer>
              </ElementsContainer>
              <ElementsContainer
                flex='0 1 10%'
                flexDirection='row'
                justifyContent='space-between'
              >
                <ElementsContainer flex='0 1 45%' flexDirection='column'>
                  <Label htmlFor='category'>Category</Label>
                  <Select
                    id='category'
                    onChange={e => this.handleInput(e)}
                    defaultValue='pleace select a value'
                  >
                    <option>Furniture</option>
                    <option>Accesories</option>
                  </Select>
                </ElementsContainer>
                <ElementsContainer flex='0 1 45%' flexDirection='column'>
                  <Label htmlFor='available'>Available</Label>
                  <Input
                    type='checkbox'
                    id='available'
                    defaultChecked={this.state.available}
                    required
                    onChange={e => this.handleInput(e)}
                  />
                </ElementsContainer>
              </ElementsContainer>
            </ProductInformationContainer>
            <CreateProduct>
              <CreateButton>Create new product</CreateButton>
            </CreateProduct>
          </CreateProductForm>
        )}
      </Mutation>
    );
  }
}

export default withRouter(CreateNewProduct);
