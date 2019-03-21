import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

// Import styles
import { Form, Label, Input } from './styles';

// GraphQL
const REQUEST_RESET_MUTATION = gql`
  mutation REQUEST_RESET_MUTATION($email: String!) {
    requestReset(email: $email) {
      message
    }
  }
`;

class RequestReset extends Component {
  state = {
    email: ''
  };

  handleSignInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <Mutation
        mutation={REQUEST_RESET_MUTATION}
        variables={this.state}
        // Looks up the apollo store, after the mutation is run
      >
        {(requestReset, { error, loading, called }) => (
          <Form
            method='post'
            onSubmit={async e => {
              e.preventDefault();
              const res = await requestReset();
              this.setState({ email: '' });
              return res;
            }}
          >
            <fieldset disabled={loading} aria-busy={loading}>
              <h2>Request password reset</h2>
              {!error && !loading && called && (
                <p>Success! check your email for reset link</p>
              )}
              <Label htmlFor='email'>
                Email
                <Input
                  type='email'
                  name='email'
                  placeholder='email'
                  value={this.state.email}
                  onChange={e => this.handleSignInput(e)}
                />
              </Label>
              <button type='submit'>Request reset</button>
            </fieldset>
          </Form>
        )}
      </Mutation>
    );
  }
}

export default RequestReset;
