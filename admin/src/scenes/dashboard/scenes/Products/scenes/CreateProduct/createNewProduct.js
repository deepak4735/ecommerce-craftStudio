import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ImageGallery from 'react-image-gallery';

import AddAPhoto from '@material-ui/icons/AddAPhoto';

import 'react-image-gallery/styles/css/image-gallery.css';

// Import styles
import {
  CreateProductContainer,
  BreadCrumbsContainer,
  ImageGalleryContainer,
  ProductInformationContainer,
  UploadImagesContainer,
  CreateProduct,
  Input,
  Label,
  TextArea,
  ElementsContainer,
  CreateButton
} from './styles';

class CreateNewProduct extends Component {
  state = {};

  render() {
    const images = [
      {
        original: 'http://lorempixel.com/1000/600/nature/1/',
        thumbnail: 'http://lorempixel.com/250/150/nature/1/'
      },
      {
        original: 'http://lorempixel.com/1000/600/nature/2/',
        thumbnail: 'http://lorempixel.com/250/150/nature/2/'
      },
      {
        original: 'http://lorempixel.com/1000/600/nature/3/',
        thumbnail: 'http://lorempixel.com/250/150/nature/3/'
      }
    ];
    return (
      <CreateProductContainer>
        <BreadCrumbsContainer>
          <p style={{ fontSize: '1rem' }}>{this.props.location.pathname}</p>
        </BreadCrumbsContainer>
        <ImageGalleryContainer>
          <ImageGallery
            showPlayButton={false}
            showFullscreenButton={false}
            // defaultImage={'./assets/No_image.png'}
            additionalClass='create-product__image-gallery'
            items={images}
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
              id='file'
            />
          </ElementsContainer>
          <ElementsContainer
            flex='0 1 70%'
            flexDirection='column'
            justifyContent='center'
          >
            <Input type='text' required placeholder='Enter an image title' />
          </ElementsContainer>
        </UploadImagesContainer>
        <ProductInformationContainer>
          <ElementsContainer flex='0 1 15%' flexDirection='column'>
            <Label htmlFor='title'>Title</Label>
            <Input type='text' required placeholder='Enter a product title' />
          </ElementsContainer>
          <ElementsContainer flex='0 1 55%' flexDirection='column'>
            <Label htmlFor='description'>Description</Label>
            <TextArea
              placeholder='Enter a product description...'
              required
              cols='30'
              rows='5'
              type='textarea'
            />
          </ElementsContainer>
          <ElementsContainer
            flex='0 1 20%'
            flexDirection='row'
            justifyContent='space-between'
          >
            <ElementsContainer flex='0 1 45%' flexDirection='column'>
              <Label htmlFor='price'>Price</Label>
              <Input type='number' placeholder={0} required />
            </ElementsContainer>
            <ElementsContainer flex='0 1 45%' flexDirection='column'>
              <Label htmlFor='stock'>Stock</Label>
              <Input type='number' placeholder={0} required />
            </ElementsContainer>
          </ElementsContainer>
        </ProductInformationContainer>
        <CreateProduct>
          <CreateButton>Create new product</CreateButton>
        </CreateProduct>
      </CreateProductContainer>
    );
  }
}

export default withRouter(CreateNewProduct);
