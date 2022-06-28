import React from 'react';
import axios from 'axios';
import Bookshelf from './Bookshelf';

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

  componentDidMount() {
    this.getBooks();
  }

  render() {
    return (
      <>
        <h2>Book Shelf</h2>
        {this.state.books.length ? (
          <Bookshelf
            bookOnShelf={this.state.books}
          />
        ) : (
          <h3>No books</h3>
        )}
      </>
    )
  }
}



export default BestBooks;