import styled from 'styled-components';

export const ProductCardContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  align-content: center;
  justify-content: space-between;

  background: white;
  border-radius: ${props => props.theme.defaultBorderRadius};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

export const ProductCardImage = styled.div`
  flex: 0 1 50%;
  width: 100%;
  max-height: 50%;
  border-radius: ${props => props.theme.defaultBorderRadius};

  img {
    border-radius: ${props => props.theme.defaultBorderRadius};
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`;

export const ProductCardTitle = styled.div`
  flex: 0 1 10%;
  max-height: 10%;
  width: 100%;
  font-size: 1.4rem;
  margin: 0;
  color: ${props => props.theme.headers};
  display: flex;
  flex-direction: column;
  line-height: 1.7rem;

  p {
    padding-left: 1rem;
    font-weight: 600;
  }

  p:nth-child(2) {
    font-size: 1.2rem;
    color: green;
  }
`;

export const ProductCardStatus = styled.div`
  flex: 0 1 10%;
  width: 100%;
  font-size: 1.2rem;
  margin: 0;
  display: flex;
  color: ${props => props.theme.paragraphs};

  p {
    padding-left: 1rem;
  }

  p:nth-child(2) {
    color: ${props => (props.status === 'available' ? `green` : `red`)};
  }
`;

export const BrowseProductBtn = styled.button`
  flex: 0 1 15%;
  min-height: 15%;
  background: transparent;
  width: 100%;
  /* height: 100%; */
  border-top: 1px solid ${props => props.theme.paragraphs};
  /* border-radius: ${props => props.theme.defaultBorderRadius}; */
  cursor: pointer;

  a {
    color: ${props => props.theme.paragraphs};
  }

  :hover {
    background: ${props => props.theme.headers};

    a {
      color: white;
    }
  }
`;
