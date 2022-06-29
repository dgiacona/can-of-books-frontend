import React from 'react';
import axios from 'axios';
import Bookshelf from './Bookshelf';
import { Button, Container, Form } from 'react-bootstrap';

const SERVER = process.env.REACT_APP_SERVER;
const API_URL = `${SERVER}/books`;
class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  getBooks = async () => {
    console.log('I fired');
    try {
      let results = await axios.get(`${process.env.REACT_APP_SERVER}/books`);
      console.log(results.data);
      this.setState({
        books: results.data
        // description: results.description,
        // status: true
      })
    } catch (error) {
      console.log('we have an error: ', error.response.data)
    }
  }

  postBooks = async (book) => {
    console.log('I fired');
    let config = {
      method: 'post',
      url: `${process.env.REACT_APP_SERVER}/books`,
      data: book
    }
    try {
      let results = await axios(config);
      console.log(results.data);
      this.setState({
        books: [...this.state.books, results.data]
        // description: results.description,
        // status: true
      })
    } catch (error) {
      console.log('we have an error: ', error.response.data)
    }
  }

  deleteBooks = async (id) => {
    try {
      let url = `${process.env.REACT_APP_SERVER}/books/${id}`;
      await axios.delete(url);
      // this.getBooks();
      let updatedBooks = this.state.books.filter(book => book._id !== id);
      this.setState({
        books: updatedBooks
      });
    } catch (error) {
      console.log('we have an error: ', error.response.data);
    }
  }

  componentDidMount() {
    this.getBooks();
  }

  handleBookSubmit = (e) => {
    e.preventDefault();
    let newBook = {
      title: e.target.title.value,
      description: e.target.description.value,
      status: e.target.status.checked
    }
    console.log(newBook);
    this.postBooks(newBook);
  }


  handleDelete = async (bookToDelete) => {
    const url = `${API_URL}/${bookToDelete._id}`;

    try {
      const response = await axios.delete(url);
      console.log(response.data);
      const filteredBooks = this.state.books.filter(book => book._id !== bookToDelete._id);
      this.setState({ books: filteredBooks });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
      <>
        <h2>Book Shelf</h2>

        <Container className="mt-5">
          <Form onSubmit={this.handleBookSubmit}>
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group controlId="status">
              <Form.Check type="checkbox" label="completed" />
            </Form.Group>
            <Button type="submit">Add Book</Button>
          </Form>
        </Container>

        {this.state.books.length ? (
          <Bookshelf
            bookOnShelf={this.state.books}
          />
        ) : (
          <h3>No books</h3>
        )}

        <Container className="mt-5">
          <Form onSubmit={this.handleDelete}>
            <Form.Group controlId="delete">
              <Form.Label>would you like to delete this book?</Form.Label>
          {/* // <Bookshelf books={this.state.books} onDelete={this.handleDelete} /> */}
            </Form.Group>
            <Button type="submit" variant="danger">Delete Book</Button>
          </Form>
        </Container>


        {/* <Button type="button" variant="danger">Delete Book</Button> */} 
      </>
    )
  }
}

export default BestBooks;