import React, { Component } from 'react';
import Portal from '../Portal/Portal';

// Import styles
import { ModalWrapper, ModalWindow, Background } from './style';

class Modal extends Component {
  render() {
    const { children, toggle, on } = this.props;
    return (
      <Portal on={on} toggle={toggle}>
        {on && (
          <ModalWrapper toggle={toggle} on={on}>
            <ModalWindow toggle={toggle} on={on}>
              {children}
            </ModalWindow>
            <Background onClick={toggle} />
          </ModalWrapper>
        )}
      </Portal>
    );
  }
}

export default Modal;
