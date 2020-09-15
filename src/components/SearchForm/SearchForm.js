import React from 'react';
import styles from './SearchForm.module.css';

class SearchForm extends React.Component {
  state = { query: '' };

  handleChange = e => {
    this.setState({ query: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.query);
  };

  render() {
    return (
      <>
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <input
            className={styles.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
            value={this.state.query}
            onChange={this.handleChange}
          />
          <button type="submit" className={styles.btn}>
            <span>Search</span>
          </button>
        </form>
      </>
    );
  }
}

export default SearchForm;
