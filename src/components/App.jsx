import { Component } from 'react';
import { SearchBar } from './SearchBar/SearchBar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { fetchImages } from 'utils/api';

export class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {}

  handleSubmit = async query => {
    try {
      const fetchedImages = await fetchImages(query, this.state.page);

      this.setState(prevState => {
        return {
          images: fetchedImages.hits,
          query: query,
        };
      });
    } catch (error) {}
  };

  render() {
    return (
      <div>
        <SearchBar onSubmit={this.handleSubmit} />
        {this.state.images.length > 0 && <ImageGallery />}
      </div>
    );
  }
}
