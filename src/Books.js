import { Component } from 'react';
import { Button, Container, ListGroup } from 'react-bootstrap';
import UpdateBookForm from './UpdateBookForm';

class Books extends Component {
  render() {
    let books = this.props.books.map(book => (
      <Book 
        book={book} 
        key={book._id} 
        deleteBooks={this.props.deleteBooks}
        updateBooks={this.props.updateBooks}
      />
    ))
    return (
      <Container>
        <ListGroup>
          {books}
        </ListGroup>
      </Container>
    )
  }
}
class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showUpdateForm: false
    }
  }

  render() {
    console.log(this.props.book);
    return (
      <>
        <ListGroup.Item>
          {this.props.book.name} is {this.props.book.color}
          <div>
            <Button  
              variant="dark" 
              onClick={() => this.props.deleteBooks(this.props.book._id)}
            >
              Delete
            </Button>
            <Button
              onClick={() => this.setState({ showUpdateForm: true })}
            >
              update 
            </Button>
          </div>
        </ListGroup.Item>
        {
          this.state.showUpdateForm &&
          <UpdateBookForm 
            book={this.props.book}
            updateBooks={this.props.updateBooks}
          />
        }
      </>
    )
  }
}

export default Books;