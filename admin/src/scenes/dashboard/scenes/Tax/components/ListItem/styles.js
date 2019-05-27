import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex: 0 1 15%;
  border-bottom: 0.2rem solid ${props => props.theme.accentOne};
`;

export const SelectBox = styled.div`
  width: 4rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CategoryName = styled.p`
  flex: 0 1 75%;
  color: white;
  margin: 0;
  cursor: pointer;
`;

export const ProductsInCategory = styled.div`
  flex: 0 1 25%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
`;
