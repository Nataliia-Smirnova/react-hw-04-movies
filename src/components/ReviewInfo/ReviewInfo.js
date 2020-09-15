import React, { Component } from 'react';
import fetch from '../../utils/Api';
import styles from './ReviewInfo.module.css';

class ReviewInfo extends Component {
  state = { review: [] };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const result = await fetch.getMovieReviews(movieId);
    this.setState({ review: result });
  }

  render() {
    const { review } = this.state;

    return review.length > 0 ? (
      <ul className={styles.ul}>
        {review.map(el => (
          <li key={el.id} className={styles.item}>
            <h3>Author: {el.author}</h3>
            <p>{el.content}</p>
          </li>
        ))}
      </ul>
    ) : (
      <p className={styles.text}>We don't have any reviews for this movie</p>
    );
  }
}

export default ReviewInfo;
