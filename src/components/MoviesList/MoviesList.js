import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styles from './MovieList.module.css';

const MovieList = ({ movies, location }) => {
  return (
    <ul className={styles.list}>
      {movies.map(({ id, title, release_date }) => (
        <li key={id} className={styles.item}>
          <Link
            to={{ pathname: `/movies/${id}`, state: { from: location } }}
            className={styles.link}
          >
            <span className={styles.title}>{title}</span>
            <span className={styles.year}>{release_date.slice(0, 4)}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default withRouter(MovieList);
