import React, { Component } from 'react';
import NavBar from '../components/nav_bar_component';
import AppBodyContainer from './app_body_container';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <NavBar />
        <AppBodyContainer />
      </div>
    );
  }
}
