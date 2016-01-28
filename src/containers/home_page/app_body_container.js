import React, { Component } from 'react';
import NewsFeed from './news_feed/news_feed_container';
import SuggestedUsers from './popular_users/suggested_users_container';

export default class AppBodyContainer extends Component {
  render() {
    return (
      <div className="container-fluid">
        <NewsFeed />
        <SuggestedUsers />
      </div>
    );
  }
}
