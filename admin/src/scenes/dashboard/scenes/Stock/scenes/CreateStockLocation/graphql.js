import gql from 'graphql-tag';

export const CREATE_NEW_STOCK_LOCATION = gql`
  mutation CREATE_NEW_STOCK_LOCATION(
    $name: String!
    $address: String!
    $postNumber: Int!
    $city: String!
  ) {
    createStockLocation(
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
