import { ApolloClient } from 'apollo-client';
import { httpLink } from './httpLink';
import { InMemoryCache } from 'apollo-boost';

export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});
