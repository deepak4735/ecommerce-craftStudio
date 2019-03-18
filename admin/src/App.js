import React, { Component } from 'react';
import { GlobalStyle } from './globalStyles/globalStyles';

// Import components
import Dashboard from './scenes/dashboard/index';
import GuardComponent from './scenes/guardComponent/index';

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <GuardComponent>
          <Dashboard />
        </GuardComponent>
      </>
    );
  }
}

export default App;
