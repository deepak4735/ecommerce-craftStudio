import styled from 'styled-components';

export const TaxesContainer = styled.div`
  grid-area: main;
  width: 100%;
  height: 100%;
  display: flex;
  background: ${props => props.theme.secondary};
  padding-right: ${props => props.theme.defaultPadding};
  padding-left: ${props => props.theme.defaultPadding};
  padding-bottom: ${props => props.theme.defaultPadding};
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ButtonContainer = styled.div`
  width: 80rem;
  height: 4rem;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 2rem;
`;

export const Button = styled.button`
  background: transparent;
  width: 16rem;
  height: 3.7rem;
  border: 1px solid ${props => props.theme.headers};
  border-radius: ${props => props.theme.defaultBorderRadius};
  cursor: pointer;
  margin-left: 2rem;

  a {
    color: ${props => props.theme.paragraphs};
  }

  :hover {
    background: ${props =>
      props.color === 'danger' ? 'red' : props.theme.headers};
    color: white;

    a {
      color: white;
    }
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 80rem;
  height: 40rem;
  border-radius: ${props => props.theme.defaultBorderRadius};
  background: ${props => props.theme.headers};
  border: 1px solid ${props => props.theme.paragraphs};
`;

export const FormHeaders = styled.div`
  width: 100%;
  align-items: center;
  flex: 0 1 10%;
  display: flex;
  border-bottom: 0.2rem solid ${props => props.theme.accentOne};
`;

export const FormHeaderElement = styled.p`
  flex: 0 1 ${props => props.flexBasis};
  color: white;
  margin: 0;
  text-align: ${props => props.textAlign};
`;

export const ListItemContainer = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
