import React, { Component } from 'react';
import { GlobalStyle } from './globalStyles/globalStyles';

// Import components
import Dashboard from './scenes/dashboard/index';
import SignIn from './scenes/signIn/index';

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <SignIn />
      </>
    );
  }
}

export default App;
