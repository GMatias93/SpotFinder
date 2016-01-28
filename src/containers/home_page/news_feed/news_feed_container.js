import React, { Component } from 'react';
import UserInput from './input_form_container';
import TimeLine from './event_list_container';

export default class NewsFeed extends Component {
  render() {
    return (
      <div className="col-md-6">
        <UserInput />
        <TimeLine />
      </div>
    );
  }
}
