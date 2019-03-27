import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Frame from './components/Frame';


import './App.css';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store = {store}>
        <div className="App">
          <header className="App-header">React & Redux Calculator</header>
          <Frame></Frame>
        </div>
      </Provider>
    );
  }
}

export default App;
