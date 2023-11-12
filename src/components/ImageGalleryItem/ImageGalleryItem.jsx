import { Component } from 'react';
// import ReactModal from 'react-modal';

import { Modal } from 'components/Modal/Modal';
import { ImageItem, Image } from './ImageGalleryItem.styled';

// const customStyles = {
//   content: {
//     objectFit: 'contain',
//     overflow: 'hidden',
//     maxHeight: '90vh',
//     top: '50%',
//     left: '50%',
//     right: 'auto',
//     bottom: 'auto',
//     marginRight: '-50%',
//     transform: 'translate(-50%, -50%)',
//   },
// };

// ReactModal.setAppElement('#root');

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
    a: 0,
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false, a: 2 });
  };

  render() {
    const { isModalOpen } = this.state;
    const { webformatURL, largeImageURL } = this.props;

    return (
      <ImageItem onClick={this.openModal}>
        <Image src={webformatURL} alt="This is result of your search" />
        {isModalOpen && (
          <Modal imageUrl={largeImageURL} closeModal={this.closeModal} />
        )}
      </ImageItem>
    );
  }
}
