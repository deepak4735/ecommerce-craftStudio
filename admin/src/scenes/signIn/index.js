import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

// Import styles
import { Form, Label, Input } from './styles';

// GraphQL
const SIGNIN_MUTATION = gql`
  mutation SIGNIN_MUTATION($email: String!, $password: String!) {
    signIn(email: $email, password: $password) {
      id
      email
    }
  }
`;

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  };

  handleSignInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <Mutation mutation={SIGNIN_MUTATION} variables={this.state}>
        {(signIn, { error, loading }) => (
          <Form
            method='post'
            onSubmit={async e => {
              e.preventDefault();
              const res = await signIn();
              console.log(res);
            }}
          >
            <fieldset disabled={loading} aria-busy={loading}>
              <h2>Please login to continue</h2>
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
              <Label htmlFor='password'>
                Password
                <Input
                  type='password'
                  name='password'
                  placeholder='password'
                  value={this.state.password}
                  onChange={e => this.handleSignInput(e)}
                />
              </Label>
              <button type='submit'>Login</button>
            </fieldset>
          </Form>
        )}
      </Mutation>
    );
  }
}

export default SignIn;
