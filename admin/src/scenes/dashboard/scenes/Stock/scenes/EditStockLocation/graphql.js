import gql from 'graphql-tag';

export const QUERY_STOCK_LOCATION = gql`
  query QUERY_STOCK_LOCATION($id: ID) {
    stockLocation(where: { id: $id }) {
      id
      name
      address
      postNumber
      city
    }
  }
`;

export const UPDATE_STOCK_LOCATION = gql`
  mutation UPDATE_STOCK_LOCATION(
    $id: ID
    $name: String
    $address: String
    $postNumber: Int
    $city: String
  ) {
    updateStockLocation(
      id: $id
      name: $name
      address: $address
      postNumber: $postNumber
      city: $city
    ) {
      id
      name
      address
      postNumber
      city
      stock {
        id
      }
    }
  }
`;

export const DELETE_STOCK_LOCATION = gql`
  mutation DELETE_STOCK_LOCATION($id: ID) {
    deleteStockLocation(id: $id) {
      name
      id
    }
  }
`;
