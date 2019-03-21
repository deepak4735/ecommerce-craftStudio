import React from 'react';
import HighlightOff from '@material-ui/icons/HighlightOff';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { CURRENT_USER_QUERY } from '../../../../../components/User/user';

const SIGN_OUT_MUTATION = gql`
  mutation SIGN_OUT_MUTATION {
    signOut {
      message
    }
  }
`;

const SignOut = props => (
  <Mutation
    mutation={SIGN_OUT_MUTATION}
    refetchQueries={[{ query: CURRENT_USER_QUERY }]}
  >
    {signOut => (
      <button
        style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}
        onClick={signOut}
      >
        {' '}
        <HighlightOff />
      </button>
    )}
  </Mutation>
);

export default SignOut;
