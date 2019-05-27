import styled from 'styled-components';
import bgImage from '../../assets/login-background.jpg';

export const Form = styled.form`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  background-image: url(${bgImage});
  background-size: cover;
  background-repeat: no-repeat;
  align-items: center;
  justify-content: center;

  fieldset {
    width: 100%;
    height: 100%;
    border: none;
    background: white;
  }
`;

export const Label = styled.label``;

export const Input = styled.input``;
