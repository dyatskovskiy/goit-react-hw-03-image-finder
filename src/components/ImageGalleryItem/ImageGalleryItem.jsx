import { Component } from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    objectFit: 'contain',
    overflow: 'hidden',
    maxHeight: '90vh',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => {
    this.setState({
      isModalOpen: true,
    });
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  render() {
    const { isModalOpen } = this.state;
    const { webformatURL, largeImageURL } = this.props;

    return (
      <li onClick={this.openModal}>
        <img src={webformatURL} alt="This is result of your search" />

        <Modal
          isOpen={isModalOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
        >
          <img src={largeImageURL} alt="Modal" />
        </Modal>
      </li>
    );
  }
}
