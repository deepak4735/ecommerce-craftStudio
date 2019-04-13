import React from 'react';
import Home from '@material-ui/icons/Home';
import AttachMoney from '@material-ui/icons/AttachMoney';
import Receipt from '@material-ui/icons/Receipt';
import Book from '@material-ui/icons/Book';
import { Link } from 'react-router-dom';

// Import components
import { Container } from '../../../../components/Container/Container';
import SignOut from './components/signOut';

// Import styles
import { SideNavigation, SideNavigationElement } from './styles';

const SideNav = () => {
  return (
    <SideNavigation>
      <Container placement='top' />
      <Container
        placement='navElements'
        flexDirection='column'
        alignmentJustify='flex-start'
      >
        <SideNavigationElement justifyContent='center'>
          <Home />
          <Link to='/'>Overview</Link>
        </SideNavigationElement>
        <SideNavigationElement justifyContent='center'>
          <AttachMoney />
          <Link to='/products'>Products</Link>
        </SideNavigationElement>
        <SideNavigationElement justifyContent='center'>
          <Receipt />
          <Link to='/orders'>Orders</Link>
        </SideNavigationElement>
        <SideNavigationElement justifyContent='center'>
          <Book />
          <Link to='/stock'>Stock</Link>
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
