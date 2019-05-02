import React from 'react';
import Home from '@material-ui/icons/Home';
import AttachMoney from '@material-ui/icons/AttachMoney';
import Receipt from '@material-ui/icons/Receipt';
import Book from '@material-ui/icons/Book';
import Category from '@material-ui/icons/Category';
import { Link } from 'react-router-dom';

// Import components
import { Container } from '../../../../components/Container/Container';
import SignOut from './components/signOut';

// Import styles
import { SideNavigation, SideNavigationElement } from './styles';

const SideNav = () => {
  return (
    <SideNavigation>
      <Container
        placement='top'
        flexDirection='column'
        alignmentAlign='center'
        alignmentJustify='center'
      >
        <h2 style={{ margin: '0' }}>Craftstudio</h2>
      </Container>
      <Container
        placement='navElements'
        flexDirection='column'
        alignmentJustify='flex-start'
      >
        <SideNavigationElement justifyContent='center'>
          <div />
          <Home />
          <Link to='/'>Overview</Link>
        </SideNavigationElement>
        <SideNavigationElement justifyContent='center'>
          <div />
          <AttachMoney />
          <Link to='/products'>Products</Link>
        </SideNavigationElement>
        <SideNavigationElement justifyContent='center'>
          <div />
          <Category />
          <Link to='/categories'>Categories</Link>
        </SideNavigationElement>
        <SideNavigationElement justifyContent='center'>
          <div />
          <Receipt />
          <Link to='/orders'>Orders</Link>
        </SideNavigationElement>
        <SideNavigationElement justifyContent='center'>
          <div />
          <Book />
          <Link to='/stock'>Stock</Link>
        </SideNavigationElement>
        <SideNavigationElement justifyContent='center'>
          <div />
          <Book />
          <Link to='/stock'>Configuration</Link>
        </SideNavigationElement>
      </Container>
      <Container placement='bottom'>
        <SideNavigationElement justifyContent='center'>
          <p>Sign out</p>
          <SignOut />
        </SideNavigationElement>
      </Container>
    </SideNavigation>
  );
};

export default SideNav;
