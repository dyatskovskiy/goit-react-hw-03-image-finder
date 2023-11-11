export const ImageGalleryItem = ({ webformatURL }) => {
  return (
    <li>
      <img src={webformatURL} alt="This is result of your search" />
    </li>
  );
};
