import gql from 'graphql-tag';

export const QUERY_ALL_STOCK_LOCATIONS = gql`
  query QUERY_ALL_STOCK_LOCATIONS {
    stockLocations {
      id
      name
      address
      postNumber
      city
      stock {
        variant {
          id
        }
      }
    }
  }
`;

export const DELETE_SELECTED_STOCK_LOCATIONS = gql`
  mutation DELETE_SELECTED_STOCK_LOCATIONS($id_in: [ID!]) {
    deleteManyStockLocations(id_in: $id_in) {
      count
    }
  }
`;
