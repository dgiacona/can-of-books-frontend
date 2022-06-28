import React from 'react';
import axios from 'axios';
// import Bestbooks from './Bestbooks';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

const SERVER = process.env.REACT_APP_SERVER;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    }
  }

  getBooks = async () => {
    console.log('I fired');
    try {
      let results = await axios.get(`${SERVER}/books`);
      console.log(results.data);
      this.setState({
        books: results.data
      })
    } catch(error){
      console.log('we have an error: ', error.response.data)
    }
  }

  componentDidMount() {
    this.fetchBooks();
  }

  async fetchBooks(location = null) {
    let apiUrl = `${SERVER}/books`;

    if (location) {
      apiUrl += `?location=${location}`;
    }

    try {
      const response = await axios.get(apiUrl);
      this.setState({ books: response.data });

    } catch (error) {
      console.log(error);
    }
  }

  handleLocationSubmit = (event) => {
    event.preventDefault();
    const location = event.target.location.value;
    console.log({ location });
    this.fetchBooks(location);
  }

  render() {
    return (
      <>
        <Router>
          <nav>
            <h1>World of Books</h1>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </nav>
          <Switch>
            <Route exact path="/">

              <div>
                <Books books={this.state.books} />
                <h2>Filter by location</h2>
                <form onSubmit={this.handleLocationSubmit}>
                  <input name="location" />
                  <button>ok</button>
                </form>
              </div>
            </Route>
            <Route path="/about">
              <h1>About Page Here</h1>
            </Route>
          </Switch>
        </Router>
      </>
    )
  }
}

export default App;