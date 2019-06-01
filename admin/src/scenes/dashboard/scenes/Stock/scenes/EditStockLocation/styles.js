import styled from 'styled-components';

export const EditTaxContainer = styled.div`
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

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 60rem;
  height: 40rem;
  border-radius: ${props => props.theme.defaultBorderRadius};
  background: ${props => props.theme.secondary};
  justify-content: center;
  align-items: center;
`;

export const ElementsContainer = styled.div`
  display: flex;
  flex-direction: ${props => props.flexDirection};
  flex: 0 1 ${props => props.flexBasis};
  justify-content: ${props => props.justifyContent};
  width: ${props => props.width};
  margin-bottom: 2rem;
`;

export const Button = styled.button`
  background: ${props => props.theme.secondary};
  width: 16rem;
  height: 3.7rem;
  border: 1px solid ${props => props.theme.headers};
  border-radius: ${props => props.theme.defaultBorderRadius};
  cursor: pointer;
  font-size: 1.3rem;

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
