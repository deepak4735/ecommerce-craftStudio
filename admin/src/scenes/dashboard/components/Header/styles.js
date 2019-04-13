import styled from 'styled-components';

export const HeaderContainer = styled.header`
  grid-area: header;
  width: 100%;
  height: 100%;
  /* background-color: crimson; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${props => props.theme.primary};
  /* margin: 0 2rem 0 2rem; */
`;

export const CompanyNameAndLogo = styled.div`
  flex: 0 1 24rem;
  padding-left: 2rem;
  display: flex;
  align-items: center;

  h2 {
    margin: 0;
    color: white;
  }
`;

export const UserInfoContainer = styled.div`
  flex: 0 1 15rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  p:nth-child(2) {
    margin-left: 0.5rem;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  flex: 0 1 70rem;
  align-items: center;
  border-radius: 0.65rem;
  background: white;
  height: 40%;

  svg {
    color: ${props => props.theme.paragraphs};
    padding-left: 1rem;
  }

  input {
    background-color: transparent;
    border: none;
    width: 100%;
    padding: 1rem;
    color: white;

    :active {
      border: none;
    }
  }
`;
