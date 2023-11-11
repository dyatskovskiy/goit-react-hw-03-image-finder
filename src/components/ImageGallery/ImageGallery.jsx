import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ imagesList }) => {
  return (
    <ul>
      {imagesList.map(item => {
        return (
          <ImageGalleryItem key={item.id} webformatURL={item.webformatURL} />
        );
      })}
    </ul>
  );
};
