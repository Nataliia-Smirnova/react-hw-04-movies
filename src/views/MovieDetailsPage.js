import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import routes from '../routes';
import styles from './MovieDetailsPage.module.css';

import fetch from '../utils/Api';
import CastInfo from '../components/CastInfo/CastInfo';
import ReviewInfo from '../components/ReviewInfo/ReviewInfo';
import defaultImg from '../components/no_image.jpg';

class MovieDetailsPage extends Component {
  state = { movieId: {} };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const result = await fetch.getMovieById(movieId);
    this.setState({ movieId: result });
  }

  handleGoBack = () => {
    const { location, history } = this.props;
    history.push(location?.state?.from || routes.home);
  };

  render() {
    const movieInfo = this.state.movieId;
    return (
      <div className={styles.movie}>
        <button
          className={styles.btn}
          type="button"
          onClick={() => this.handleGoBack()}
        >
          Go back
        </button>
        <div className={styles.movieCard}>
          <div className={styles.movie_main}>
            <div>
              <img
                className={styles.poster}
                src={
                  movieInfo.poster_path
                    ? `https://image.tmdb.org/t/p/w300/${movieInfo.poster_path}`
                    : defaultImg
                }
                alt="poster"
              />
            </div>
            <div className={styles.info_box}>
              <h2 className={styles.title}>
                {movieInfo.original_title}
                <span className={styles.date}>
                  {movieInfo.release_date && movieInfo.release_date.slice(0, 4)}
                </span>
              </h2>
              <p>
                Vote:
                <span className={styles.score}>{movieInfo.vote_average}</span>
              </p>
              <h3>Overview</h3>
              <p className={styles.text}>{movieInfo.overview}</p>
              <ul className={styles.list}>
                Genres:
                {movieInfo.genres &&
                  movieInfo.genres.map(genre => (
                    <li key={genre.id} className={styles.item}>
                      {genre.name}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
          <div>
            <h2 className={styles.addInfo}>Additional information:</h2>
            <ul className={styles.info_list}>
              <li>
                <NavLink
                  to={`${this.props.match.url}/cast`}
                  className={styles.info_item}
                  activeClassName={styles.info__active}
                >
                  Cast
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`${this.props.match.url}/reviews`}
                  className={styles.info_item}
                  activeClassName={styles.info__active}
                >
                  Reviews
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <Route
          path={`${this.props.match.path}/cast`}
          render={props => <CastInfo {...props} />}
        />
        <Route
          path={`${this.props.match.path}/reviews`}
          render={props => <ReviewInfo {...props} />}
        />
      </div>
    );
  }
}

export default MovieDetailsPage;
