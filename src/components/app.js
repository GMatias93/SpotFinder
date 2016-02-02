import React, { Component } from 'react';

import SearchBar from '../containers/search_bar';
import EventTimeline from '../containers/event_timeline';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <EventTimeline />
      </div>
    );
  }
}
