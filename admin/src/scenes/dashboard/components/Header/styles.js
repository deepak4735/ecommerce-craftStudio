import styled from 'styled-components';

export const HeaderContainer = styled.header`
  grid-area: header;
  width: 100%;
  height: 100%;
  background-color: crimson;
  display: flex;
  justify-content: space-between;
  padding: 0 2rem 0 2rem;
`;

export const UserInfoContainer = styled.div`
  flex: 0 1 20rem;
  display: flex;
  justify-content: flex-end;

  p:nth-child(2) {
    margin-left: 0.5rem;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  height: 100%;

  input {
    background-color: transparent;
    border: none;

    :active {
      border: none;
    }
  }
`;
