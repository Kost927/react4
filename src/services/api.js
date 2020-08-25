import axios from "axios";

export default {
  async getPopularMovies() {
    try {
      const response = axios.get(
        "https://api.themoviedb.org/3/trending/movie/week?api_key=e556f4cb18f938c80aa7002cebf5c85e"
      );
      return response;
      //   console.log(response);
    } catch (error) {
      throw new Error(error);
    }
  },


  async getMovieDetails(id) {
    try {
      const response = axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=e556f4cb18f938c80aa7002cebf5c85e&language=en-US`
      );
      return response;
      //   console.log(response);
    } catch (error) {
      throw new Error(error);
    }
  },


  async getMovieCast(id) {
    try {
      const response = axios.get(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=e556f4cb18f938c80aa7002cebf5c85e`
      );
      return response;
      //   console.log(response);
    } catch (error) {
      throw new Error(error);
    }
  },


  async getMovieReview(id) {
    try {
      const response = axios.get(
        `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=e556f4cb18f938c80aa7002cebf5c85e&language=en-US&page=1`
      );
      return response;
      //   console.log(response);
    } catch (error) {
      throw new Error(error);
    }
  },


  async searchMovie(query) {
    try {
      const response = axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=e556f4cb18f938c80aa7002cebf5c85e&language=en-US&query=${query}&page=1&include_adult=false`
      );
      return response;
      //   console.log(response);
    } catch (error) {
      throw new Error(error);
    }
  },
};