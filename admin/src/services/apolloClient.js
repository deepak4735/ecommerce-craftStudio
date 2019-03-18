import { httpLink } from './httpLink';
import ApolloClient from 'apollo-boost';

// export const client = new ApolloClient({
//   link: httpLink,
//   cache: new InMemoryCache()
// });

// function createClient({ headers }) {
//   return new ApolloClient({
//     uri:
//       process.env.NODE_ENV === 'development'
//         ? 'http://localhost:4444'
//         : 'http://localhost:4444',
//     request: operation => {
//       operation.setContext({
//         fetchOptions: {
//           credentials: 'include'
//         },
//         headers
//       });
//     }
//   });
// }

export const client = new ApolloClient({
  uri: 'http://localhost:4444',
  request: operation => {
    operation.setContext({
      fetchOptions: {
        credentials: 'include'
      }
    });
  }
});

// export default client;
