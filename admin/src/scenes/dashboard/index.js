import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';

// Import theme and globalstyles
import { theme } from '../../globalStyles/theme';

// Import components
import SideNav from './components/SideNav/sideNav';
import Header from './components/Header/header';
import Main from './components/Main/main';

// Import styles
import { DashboardContainer } from './styles';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <ThemeProvider theme={theme}>
        <DashboardContainer>
          <Header />
          <SideNav />
          <Main />
        </DashboardContainer>
      </ThemeProvider>
    );
  }
}

export default Dashboard;
