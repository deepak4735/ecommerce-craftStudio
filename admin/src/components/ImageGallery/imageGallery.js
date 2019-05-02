import React, { Component } from 'react';

// Import styles
import { ImageGalleryContainer, LargeSelectedImage } from './styles';

class ImageGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <ImageGalleryContainer>
        <LargeSelectedImage>
          <img
            src={
              'http://classifieds.steamboattoday.com/public/images/no-photo.png'
            }
            alt='test'
          />
        </LargeSelectedImage>
      </ImageGalleryContainer>
    );
  }
}

export default ImageGallery;
