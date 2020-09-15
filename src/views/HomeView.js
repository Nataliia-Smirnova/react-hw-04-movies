import React, { Component } from 'react';
import fetch from '../utils/Api';
import MovieList from '../components/MoviesList/MoviesList';
import styles from './HomeView.module.css';

class HomeView extends Component {
  state = { movies: [] };

  async componentDidMount() {
    const result = await fetch.getPopularMovies();
    this.setState({ movies: result });
  }

  render() {
    return (
      <div className={styles.mainContent}>
        <h1 className={styles.title}>Trending today</h1>
        <MovieList movies={this.state.movies} />
      </div>
    );
  }
}

export default HomeView;
