import styled from 'styled-components';

export const ImageGalleryContainer = styled.div`
  max-width: 100%;
  max-height: 100%;
  /* border: 1px solid black; */
`;

export const LargeSelectedImage = styled.div`
  img {
    width: 100%;
    height: 100%;
    object-fit: fit;
  }
`;
