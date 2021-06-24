import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavBar from '../components/NavBar';
import MoviesPage from './MoviesPage';

class App extends Component {

  state = {
    movies: {
      1: { id: 1, title: 'A River Runs Through It' },
      2: { id: 2, title: 'Se7en' },
      3: { id: 3, title: 'Inception' }
    }
  }

  render() {
    return (
      <Router>
        <div>
          <NavBar />
          {/* Aside: Notice that instead of the component prop, we're using render. > The render prop works very similarly to component, but instead of passing > an entire component in, we must pass a function that returns JSX. */}
          <Route exact path="/" render={() => <div>Home</div>} />
          {/* the Route will call the function inside render and pass in the current information available about the route, including the URL path that caused the Route to render. This is not possible with the regular component prop on Routes we've seen before. */}
          <Route path='/movies' render={routerProps => <MoviesPage {...routerProps} movies={this.state.movies}/>} />
        </div>
      </Router>
    );
  }
}

export default App;
