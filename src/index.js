import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import EventList from './components/event_list';
const API_KEY = 'EBWDFQQQMYR6RFOGMJS4';
const url = `https://www.eventbriteapi.com/v3/events/search/?token=${API_KEY}`;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { events: [] };

    axios.get(url)
    .then((response) => {
      console.log('this is the response', response);
      this.setState({ events: response.data.events });
    });
  }

  render() {

    return (
      <div>
        <EventList events={this.state.events}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
