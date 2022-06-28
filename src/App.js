import React from 'react';
// import axios from 'axios';
import BestBooks from './BestBooks';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from "react-router-dom";

class App extends React.Component {

  render() {
    return (
      <>
        <Router>
          <nav>
            <h1>World of Books</h1>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </nav>
          <Route
            exact path="/" element={<BestBooks />}>
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