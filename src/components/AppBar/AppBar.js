import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import styles from './AppBar.module.css';

const AppBar = () => {
  return (
    <header>
      <ul className={styles.ul}>
        <li>
          <NavLink
            exact
            to={routes.home}
            className={styles.link}
            activeClassName={styles.link__active}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={routes.movies}
            className={styles.link}
            activeClassName={styles.link__active}
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default AppBar;
