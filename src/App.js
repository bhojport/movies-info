import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Movies } from 'movies'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" key="discover-movies" component={Movies} />
          <Route exact path="/trending" key="trending" component={Movies} />
          <Route path="/:id" key="movie-detail" component={Movies} />
        </Switch>
      </Router>
    );
  }
}

export default App;

