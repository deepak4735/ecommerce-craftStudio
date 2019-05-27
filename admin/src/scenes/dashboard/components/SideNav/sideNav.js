import React from 'react';
import Home from '@material-ui/icons/Home';
import AttachMoney from '@material-ui/icons/AttachMoney';
import Receipt from '@material-ui/icons/Receipt';
import Book from '@material-ui/icons/Book';
import Category from '@material-ui/icons/Category';
import { Link } from 'react-router-dom';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

// Import components
import { Container } from '../../../../components/Container/Container';
import SignOut from './components/signOut';

// Import styles
import { SideNavigation, SideNavigationElement } from './styles';

// Local state
export const QUERY_USER = gql`
  query QUERY_USER {
    currentUser {
      id
      name
      email
      permissions
    }
  }
`;

const SideNav = () => {
  return (
    <Query query={QUERY_USER}>
      {({ data, loading, error }) => {
        if (loading) return null;
        const { permissions } = data.currentUser;
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
                <Link to='/product-types'>Product Types</Link>
              </SideNavigationElement>
              <SideNavigationElement justifyContent='center'>
                <div />
                <Book />
                <Link to='/taxes'>Tax</Link>
              </SideNavigationElement>
              {permissions[0] === 'ADMIN' ? (
                <SideNavigationElement justifyContent='center'>
                  <div />
                  <Book />
                  <Link to='/user-management'>User management</Link>
                </SideNavigationElement>
              ) : null}
            </Container>
            <Container placement='bottom'>
              <SideNavigationElement justifyContent='center'>
                <p>Sign out</p>
                <SignOut />
              </SideNavigationElement>
            </Container>
          </SideNavigation>
        );
      }}
    </Query>
  );
};

export default SideNav;
