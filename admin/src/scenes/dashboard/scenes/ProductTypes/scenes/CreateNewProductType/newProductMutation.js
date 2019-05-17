import gql from 'graphql-tag';

export const CREATE_PRODUCT_TYPE = gql`
  mutation CREATE_PRODUCT_TYPE(
    $typeName: String!
    $shippingRequired: Boolean!
    $weight: WeightCreateInput
    $tax: TaxCreateInput
  ) {
    createProductType(
      name: $typeName
      shippingRequired: $shippingRequired
      weight: { create: $weight }
      taxes: { create: $tax }
    ) {
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
