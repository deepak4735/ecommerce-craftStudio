import React, { useState } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

// Import components
import SignIn from '../signIn/index';

// GraphQL Query
import { CURRENT_USER_QUERY } from '../../components/User/user';

const GuardComponent = props => {
  return (
    <Query query={CURRENT_USER_QUERY}>
      {({ data, loading }) => {
        if (loading) return <p>Loading...</p>;
        if (!data.currentUser) {
          return <SignIn />;
        }
        return props.children;
      }}
    </Query>
  );
};

export default GuardComponent;
