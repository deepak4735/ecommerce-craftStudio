import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalButtonClose = styled.button`
  background-color: blue;
`;

export const ModalWindow = styled.div`
  position: relative;
  box-shadow: 0.2rem 0.2rem 1rem rgba(0, 0, 0, 0.3);
  /* border-radius: ${props => props.theme.baseRadius}; */
  z-index: 10;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: black;
  opacity: 0.5;
`;
