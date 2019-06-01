import gql from 'graphql-tag';

export const CREATE_PRODUCT_TYPE = gql`
  mutation CREATE_PRODUCT_TYPE(
    $name: String!
    $shippingRequired: Boolean!
    $weight: WeightCreateInput
    $tax: TaxWhereUniqueInput
  ) {
    createProductType(
      name: $name
      shippingRequired: $shippingRequired
      weight: { create: $weight }
      taxes: { connect: $tax }
    ) {
      id
      name
      shippingRequired
      weight {
        unit
        value
      }
      taxes {
        name
        taxRate
      }
    }
  }
`;

export const QUERY_ALL_TAXES = gql`
  query QUERY_ALL_TAXES {
    taxes {
      id
      name
      taxRate
    }
  }
`;
