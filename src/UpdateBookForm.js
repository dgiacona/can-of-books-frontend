import React from 'react';
import { Container, Button, Form } from 'react-bootstrap';

class UpdateBookForm extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault();
    let bookToUpdate = {
      title: e.target.title.value || this.props.book.title,
      description: e.target.description.value || this.props.book.description,
      status: e.target.status.checked || this.props.book.status,
      _id: this.props.book._id,
      __v: this.props.book.__v
    }
    this.props.updateBooks(bookToUpdate);
  }

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder={this.props.book.title} />
          </Form.Group>
          <Form.Group controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" placeholder={this.props.book.description} />
          </Form.Group>
          <Form.Group controlId="status">
            <Form.Check type="checkbox" label="read or not" />
          </Form.Group>
          <Button type="submit">Update Book</Button>
        </Form>
      </Container>
    )
  }
}

export default UpdateBookForm
