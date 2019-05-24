import gql from 'graphql-tag';

// Query
export const EDIT_PRODUCT_TYPE = gql`
  query EDIT_PRODUCT_TYPE($id: ID!) {
    productType(where: { id: $id }) {
      id
      name
      shippingRequired
      weight {
        id
        unit
        value
      }
      taxes {
        id
        name
        taxRate
      }
      hasVariants
      productAttributes {
        id
        attributeName
        attributeValues {
          id
          value
        }
      }
      variantAttributes {
        id
        attributeName
        attributeValues {
          id
          value
        }
      }
    }
  }
`;

// mutation
export const UPDATE_PRODUCT_TYPE = gql`
  mutation UPDATE_PRODUCT_TYPE(
    $id: ID
    $name: String
    $shippingRequired: Boolean
    $hasVariants: Boolean
    $weight: WeightUpdateDataInput
    $taxes: TaxUpdateDataInput
  ) {
    updateProductType(
      id: $id
      name: $name
      shippingRequired: $shippingRequired
      hasVariants: $hasVariants
      weight: { update: $weight }
      taxes: { update: $taxes }
    ) {
      id
      name
      shippingRequired
      hasVariants
    }
  }
`;
