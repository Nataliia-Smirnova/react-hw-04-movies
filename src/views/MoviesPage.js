import React, { Component } from 'react';
import fetch from '../utils/Api';

import SearchForm from '../components/SearchForm/SearchForm';
import MovieList from '../components/MoviesList/MoviesList';
const queryString = require('query-string');

class MoviesPage extends Component {
  state = { movies: [], query: '' };

  async componentDidMount() {
    const parseQuery = queryString.parse(this.props.location.search);
    if (parseQuery.query) {
      const result = await fetch.getMovie(parseQuery.query);
      this.setState({ movies: result });
    }
  }

  async componentDidUpdate() {
    const result = await fetch.getMovie(this.state.query);
    this.setState({ movies: result });
  }

  handleSubmit = query => {
    this.setState({ query });
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `query=${query}`,
    });
  };

  render() {
    return (
      <>
        <SearchForm onSubmit={this.handleSubmit} />
        <MovieList
          movies={this.state.movies}
          location={`${this.props.location.pathname}${this.props.location.search}`}
        />
      </>
    );
  }
}

export default MoviesPage;
