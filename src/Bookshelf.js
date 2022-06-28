
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

class Bookshelf extends React.Component {
  render() {
    let bookCarousel = this.props.bookOnShelf.map((book, index) => {
      return (
        <Carousel.Item key={index}>
          <img
            className="d-block"
            src={'./test.jpg'}
            alt='test'
          />
          <Carousel.Caption >
            <p>title: {book.title}</p>
            <p>Description: {book.description}</p>
            <p>Status: {book.status}</p>

          </Carousel.Caption>
        </Carousel.Item>
      )
    });

    return (
      <Carousel variant='dark'>
        {bookCarousel}
      </Carousel>
    );
  }
}

export default Bookshelf;