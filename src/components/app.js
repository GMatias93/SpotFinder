import React, { Component } from 'react';
import NavBar from './nav_bar';
import AppContainer from '../containers/app_container';

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <AppContainer />
      </div>
    );
  }
}
