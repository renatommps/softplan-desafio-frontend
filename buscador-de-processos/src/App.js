import React, { Component } from 'react';
import MainView from './containers/main/MainView';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='content-wrapper'>
          <MainView />
        </div>
      </div>
    );
  }
}

export default App;
