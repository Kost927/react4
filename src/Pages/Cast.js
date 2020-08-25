import React, { Component } from "react";
import api from "../services/api";

class Cast extends Component {
  state = {
    cast: [],
  };

  componentDidMount() {
    api
      .getMovieCast(this.props.match.params.id)
      .then((res) => this.setState({ cast: res.data.cast }));
  }
  render() {
    console.log(this.props);
    const { cast } = this.state;
    return (
      <>
        {cast &&
          cast.map((actor) => (
            <li key={actor.id}>
              {actor.profile_path && (
                <img
                  width="100"
                  alt={actor.name}
                  src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                />
              )}
              <p>{actor.character}</p>
              <p>{actor.name}</p>
            </li>
          ))}
      </>
    );
  }
}

export default Cast;