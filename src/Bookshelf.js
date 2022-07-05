
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import UpdateBookForm from './UpdateBookForm';

class Bookshelf extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showUpdateForm: false,
      bookUpdate: ''
    }
  }

  handleonHide = () => {
    this.setState({
      showUpdateForm: false
    });
  };

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
            <p>Status: {book.status ? 'I have read this book' : 'I have not read this book'}</p>
            <Button variant="danger" onClick={() => this.props.deleteBooks(book._id)}> Delete Book</Button>
            <Button id="updateButton" variant="warning" onClick={() => this.setState({ showUpdateForm: true, bookUpdate: book })} >Update</Button>

          </Carousel.Caption>
        </Carousel.Item>
      )
    });

    return (
      <>
        <Carousel variant='dark'>
          {bookCarousel}
        </Carousel>
        {
          this.state.showUpdateForm &&
          <UpdateBookForm
            book={this.state.bookUpdate}
            updateBooks={this.props.updateBooks}
            handleOnHide={this.handleOnHide}
            showUpdateForm={this.state.showUpdateForm}
          />
        }
      </>
    );
  }
}

export default Bookshelf;