import React, { Component } from 'react';
import fetch from '../../utils/Api';
import styles from './CastInfo.module.css';
import defaultImg from '../no_image.jpg';

class CastInfo extends Component {
  state = { cast: [] };

  async componentDidMount() {
    const { movieId } = this.props.match.params;

    const result = await fetch.getMovieCast(movieId);
    this.setState({ cast: result });
  }

  render() {
    const { cast } = this.state;

    return (
      <ul className={styles.list}>
        {cast.slice(0, 6).map(el => (
          <li key={el.id} className={styles.item}>
            <div className={styles.thumb}>
              <img
                className={styles.photo}
                src={
                  el.profile_path
                    ? `https://image.tmdb.org/t/p/w300/${el.profile_path}`
                    : defaultImg
                }
                alt={`${el.name}`}
              />
            </div>
            <div className={styles.infoBox}>
              <p className={styles.name}>{el.name}</p>
              <p>Character: {el.character}</p>
            </div>
          </li>
        ))}
      </ul>
    );
  }
}

export default CastInfo;
