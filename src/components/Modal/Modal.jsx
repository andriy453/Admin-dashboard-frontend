import { createPortal } from 'react-dom';
import { Backdrop, StyledModal, StyledCloseButton, Svg } from './Modal.stuled';
import { useEffect, useLayoutEffect } from 'react';
import sprite from '../../assets/sprite.svg';

function Modal({ children, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', keyDown);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useLayoutEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', keyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const keyDown = (e) => {
    if (e.code === 'Escape') {
      document.body.style.overflow = 'unset';
      element.classList.remove('modal-open');
      onClose(false);
    }
  };
  let element = document.querySelector('body');
  const onOverlayClose = (e) => {
    if (e.currentTarget === e.target) {
      document.body.style.overflow = 'unset';
      element.classList.remove('modal-open');
      onClose(false);
    }
  };
  return createPortal(
    <Backdrop onClick={onOverlayClose} top={top}>
      <StyledModal>
        <StyledCloseButton type="button" onClick={onClose}>
          <Svg>
            <use href={sprite + '#icon-x'} />
          </Svg>
        </StyledCloseButton>
        {children}
      </StyledModal>
    </Backdrop>,
    document.getElementById('modal-root')
  );
}

export default Modal;
