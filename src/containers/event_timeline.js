import React, { Component } from 'react';

import Event from '../components/event';

export default class EventTimeline extends Component {
  // renderEvents(eventData) {
  //   return (
  //     <li>
  //       <div></div>
  //       <div></div>
  //       <div></div>
  //     </li>
  //   );
  // }

  render() {
    return (
      <ul>
        <Event />
      </ul>
    );
  }
}
