import { Component } from 'react';
import { SearchBar } from './SearchBar/SearchBar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { fetchImages } from 'utils/api';
import { Button } from './Button/Button';

export class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
  };

  async componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      try {
        const queryWithoutId = this.state.query.slice(
          this.state.query.indexOf('/') + 1
        );

        const fetchedImages = await fetchImages(
          queryWithoutId,
          this.state.page
        );

        this.setState(prevState => {
          return {
            images: [...prevState.images, ...fetchedImages.hits],
          };
        });
      } catch (error) {}
    }
  }

  handleSubmit = query => {
    this.setState(() => {
      return {
        images: [],
        query: `${Date.now()}/${query}`,
        page: 1,
      };
    });
  };

  handleLoadMore = () => {
    this.setState(prevState => {
      return { page: prevState.page + 1 };
    });
  };

  render() {
    return (
      <div>
        <SearchBar onSubmit={this.handleSubmit} />
        {this.state.images.length > 0 && (
          <ImageGallery imagesList={this.state.images} />
        )}
        {this.state.images.length > 0 && (
          <Button handleClick={this.handleLoadMore} />
        )}
      </div>
    );
  }
}
