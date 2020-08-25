import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api'

class HomePage extends Component {

    state = {
        trendingMovies: [],
      };
      componentDidMount() {
        api
          .getPopularMovies()
          .then((res) => this.setState({ trendingMovies: res.data.results }));
      }

  render() {
    const { trendingMovies } = this.state;
    return (
      <>
 <h1>Trending today</h1>
        <ul>
        {trendingMovies.map((movie) => (
          <li key={movie.id}>
            <Link
              id={movie.id}
              to={{
                pathname: `/movies/${movie.id}`,
                state: { from: this.props.location },
              }}
            >
              {movie.title}
            </Link>
          </li>
        ))}
        </ul>
      </>
    );
  }
}

export default HomePage;
