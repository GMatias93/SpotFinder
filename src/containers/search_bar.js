import React, { Component } from 'react';

export default class SearchBar extends Component {
  render() {
    return (
      <form>
        <input
          placeholder="Search a city for events"
          />
        <span>
          <button typy="submit">Submit</button>
        </span>
      </form>
    );
  }
}
