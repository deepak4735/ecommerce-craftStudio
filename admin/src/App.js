import React, { Component } from 'react';
import Dashboard from './scenes/dashboard/index';
import { GlobalStyle } from './globalStyles/globalStyles';

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Dashboard />
      </>
    );
  }
}

export default App;
