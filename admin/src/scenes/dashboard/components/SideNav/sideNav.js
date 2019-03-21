import React from 'react';
import Home from '@material-ui/icons/Home';
import AttachMoney from '@material-ui/icons/AttachMoney';
import Receipt from '@material-ui/icons/Receipt';
import Book from '@material-ui/icons/Book';
import { Link } from 'react-router-dom';

// Import styles
import { SideNavigation, SideNavigationElement } from './styles';

const SideNav = () => {
  return (
    <SideNavigation>
      <SideNavigationElement>
        <Home />
        <Link to='/'>Dashboard</Link>
      </SideNavigationElement>
      <SideNavigationElement>
        <AttachMoney />
        <Link to='/products'>Products</Link>
      </SideNavigationElement>
      <SideNavigationElement>
        <Receipt />
        <Link to='/orders'>Orders</Link>
      </SideNavigationElement>
      <SideNavigationElement>
        <Book />
        <Link to='/stock'>Stock</Link>
      </SideNavigationElement>
    </SideNavigation>
  );
};

export default SideNav;
