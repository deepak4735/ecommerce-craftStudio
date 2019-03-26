import React, { Component } from 'react';

// Import styles
import {
  ImageGalleryContainer,
  LargeSelectedImage,
  ImagesArray,
  ImageThumbnail
} from './styles';

const imagesGal = [
  {
    thumbnail:
      'https://res.cloudinary.com/diwu3yx6a/image/upload/v1553639379/craftstudio/rywa9gzy4wm3vhzk9zxu.jpg'
  },
  {
    thumbnail:
      'https://res.cloudinary.com/diwu3yx6a/image/upload/c_scale,q_auto,w_200/v1553640186/craftstudio/xsglljy8reackmbx3lzp.jpg'
  }
];

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
              'https://res.cloudinary.com/diwu3yx6a/image/upload/c_scale,q_auto,w_1000/v1553634965/craftstudio/jb4oh9mqnkdglyecljkz.jpg'
            }
            alt='test'
          />
        </LargeSelectedImage>
        <ImagesArray>
          {imagesGal.map((image, index) => (
            <ImageThumbnail id={index}>
              <img src={image.thumbnail} alt='jajajaj' />
            </ImageThumbnail>
          ))}
        </ImagesArray>
      </ImageGalleryContainer>
    );
  }
}

export default ImageGallery;
