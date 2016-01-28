import React, { Component } from 'react';
import LiveStream from './home_page/news_feed/live_stream_container';

export default class AppContainer extends Component {
  render() {
    return (
      <div className="container-fluid">
        <LiveStream />
      </div>
    );
  }
}
