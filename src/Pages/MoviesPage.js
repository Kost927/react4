import React, { Component } from "react";
import api from "../services/api";
// import MovieDetailsPage from '../Pages/MovieDetailsPage';
import getQueryParams from "../services/query";
import MovieSearchList from "../components/MovieSearchlist/MovieSearchlist"

class MoviesPage extends Component {
  state = {
    query: "",
    queryMovies: [],
  };

  componentDidMount() {
    const params = getQueryParams(this.props.location.search);
    const { query } = params;
    if (query) {
      api
        .searchMovie(query)
        .then((res) => this.setState({ queryMovies: res.data.results }));
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    api
      .searchMovie(this.state.query)
      .then((res) => this.setState({ queryMovies: res.data.results }));
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `query=${this.state.query}`,
    });
    this.setState({ query: "" });

  };
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    const { queryMovies } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              type="text"
              value={this.state.query}
              name="query"
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Search</button>
        </form>
        <div>
          <ul>
            <MovieSearchList movies={queryMovies} />
          </ul>
        </div>
      </>
    );
  }
}

export default MoviesPage;
