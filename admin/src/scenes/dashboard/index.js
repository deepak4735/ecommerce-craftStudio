import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Import components
import SideNav from './components/SideNav/sideNav';
import Header from './components/Header/header';
import Main from './components/Main/main';
import Footer from './components/Footer/footer';

// Import scenes
import Home from './scenes/home/index';

// Import styles
import { DashboardContainer } from './styles';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <DashboardContainer>
        <Header>
          <p>Header</p>
        </Header>
        <SideNav>
          <p>Side nav</p>
        </SideNav>
        <Main>
          <Home />
        </Main>
        <Footer>
          <p>Footer</p>
        </Footer>
      </DashboardContainer>
    );
  }
}

export default Dashboard;
