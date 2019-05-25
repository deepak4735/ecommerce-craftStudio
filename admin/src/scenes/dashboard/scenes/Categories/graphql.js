import { Query } from 'react-apollo';
import gql from 'graphql-tag';

export const QUERY_ALL_CATEGORIES = gql`
  query QUERY_ALL_CATEGORIES {
    categories {
      id
      name
      productsInCategory {
        id
      }
    }
  }
`;
