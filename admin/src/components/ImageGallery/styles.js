import styled from 'styled-components';

export const ImageGalleryContainer = styled.div`
  width: 100%;
  height: 100%;
  /* border: 1px solid black; */

  padding: 1rem;

  display: grid;
  grid-template-rows: 65% 35%;
  grid-template-areas:
    'selected-image'
    'images-array';
`;

export const LargeSelectedImage = styled.div`
  grid-area: selected-image;
  border: 1px solid magenta;

  img {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
`;

export const ImagesArray = styled.div`
  grid-area: images-array;
  border: 1px solid mediumslateblue;
  padding: 1rem;

  display: flex;
  /* justify-content: space-between; */
  align-items: center;
`;

export const ImageThumbnail = styled.div`
  flex: 0 1 30%;
  width: 100%;
  height: 100%;
  border: 1px solid black;

  img {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
`;
