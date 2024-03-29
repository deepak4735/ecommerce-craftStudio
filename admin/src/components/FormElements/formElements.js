import styled from 'styled-components';

export const Label = styled.label`
  flex: 0 1 ${props => props.flexBasis};
  color: ${props => props.theme.headers};
  opacity: 75%;
  font-size: 1.5rem;
  min-width: 20rem;
  font-weight: ${props => props.fontWeight};
`;

export const Input = styled.input`
  flex: 0 1 ${props => props.flexBasis};
  background: ${props => props.theme.headers};
  width: ${props => props.width};
  border: 1px solid ${props => props.theme.paragraphs};
  border-radius: ${props => props.theme.defaultBorderRadius};
  padding: ${props => props.inputPadding};
  /* color: ${props => props.theme.paragraphs}; */
  padding-left: 1rem;
  color: white;
  font-size: 1.35rem;
`;

export const TextArea = styled.textarea`
  flex: 0 1 ${props => props.flexBasis};
  width: 100%;
  outline: none;
  padding-top: 1rem;
  padding-left: 1rem;
  border: none;
  border-radius: ${props => props.theme.defaultBorderRadius};

  background: ${props => props.theme.headers};
  border-bottom: 1px solid ${props => props.theme.headers};
  font-size: 1.35rem;

  resize: none;
  overflow: auto;

  color: white;
`;

export const Select = styled.select`
  flex: 0 1 ${props => props.flexBasis};
  width: ${props => props.width};
  border: none;
  /* -webkit-appearance: none; */
  /* -webkit-border-radius: 0px; */
  /* border-bottom: 1px solid ${props => props.theme.headers}; */
  font-size: 1.3rem;

  background: transparent;
  /* padding: 0 1rem 0 1rem; */

  > option {
    padding: 0;
    border-radius: 0rem;
  }
`;
