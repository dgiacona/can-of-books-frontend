import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import BestBooks from './BestBooks';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from "react-router-dom";

class App extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        books: []
      }
    }

  handleBookSubmit = (e) => {
    e.preventDefault();
    let newBook = {
      title: e.target.title.value,
      description: e.target.description.value,
      status: e.target.status.checked
    }
    this.PostBooks(newBook)
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


          <Route exact path="/"> <BestBooks />
          </Route>
          <Route path="/about">
            <h1>About Page Here</h1>
          </Route>
        </Router>
      </>
    )
  }
}

export default App;