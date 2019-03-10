import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const LOAD_USERS = gql`
  {
    users {
      id
      name
      email
    }
  }
`;

const Home = () => {
  return (
    <Query query={LOAD_USERS}>
      {({ loading, error, data }) => {
        if (loading) return <div>Fetching</div>;
        if (error) return <div>Error</div>;

        const userData = data.users;
        console.log(userData);

        return (
          <div>
            {userData.map(link => (
              <>
                <p>{link.name}</p>
                <p>{link.email}</p>
                <p>{link.id}</p>
              </>
            ))}
          </div>
        );
      }}
    </Query>
  );
};

export default Home;
