import React, { Component } from 'react';
import { connect } from 'react-redux';

class SearchBar extends Component {
  constructor() {
    super();

    this.setState = { term: '' };
  }

  onFormSubmit(event) {
    event.preventDefault();

    this.props.fetchEvents();

  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Search a city for events"
          className="form-control"
          />
        <span className="input-group-btn">
          <button typy="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreator({ fetchEvents }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
