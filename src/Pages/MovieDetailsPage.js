import React, { Component } from 'react';
import api from '../services/api';
import { Link, withRouter } from 'react-router-dom';

class MovieDetailsPage extends Component {
  state = {
    id: this.props?.match.params?.id,
    movieInfo: {},
  };
  componentDidMount() {
    api
      .getMovieDetails(this.state.id)
      .then(res => this.setState({ movieInfo: { ...res.data } }));
  }

  goBackBtn = () => {
    // console.log(this.props);
    const { history, location } = this.props;

    if (location.state?.from) {
      history.push(location.state.from);
      return;
    }

    history.push('/');
  };

  render() {
    const {
      original_title,
      vote_count,
      popularity,
      overview,
      poster_path,
    } = this.state.movieInfo;

    return (
      <>
        <button type="button" onClick={this.goBackBtn}>
          Go back
        </button>
        <div>
          {poster_path && (
            <img
              src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
              alt="/"
              width="200"
            />
          )}

          <h3>{original_title}</h3>
          <p>popularity: {popularity}</p>
          <p>vote-count: {vote_count}</p>
          <h4>Overview</h4>
          <p>{overview}</p>
        </div>
        <div>
          <ul>
            <li>
              <Link
                to={{
                  pathname: `${this.props.match.url}/cast`,
                  state: { from: this.props.location.state.from },
                }}
              >
                Cast
              </Link>
            </li>
            <li>
              <Link
                to={{
                  pathname: `${this.props.match.url}/reviews`,
                  state: { from: this.props.location.state.from },
                }}
              >
                Reviews
              </Link>
            </li>
          </ul>
        </div>
      </>
    );
  }
}

export default withRouter(MovieDetailsPage);
