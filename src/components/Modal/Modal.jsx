import { ModalOverlay, ModalWindow } from './Modal.styled';

export const Modal = ({ imageUrl, closeModal }) => {
  return (
    <ModalOverlay>
      <ModalWindow>
        <button onClick={closeModal}>Close</button>
        <img src={imageUrl} alt="This is result of your search" />
      </ModalWindow>
    </ModalOverlay>
  );
};
