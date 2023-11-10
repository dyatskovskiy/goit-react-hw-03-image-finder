export const ImageGalleryItem = ({ webformatURL, largeImageURL }) => {
  return (
    <li>
      <img src={webformatURL} alt="This is result of your search" />
    </li>
  );
};
