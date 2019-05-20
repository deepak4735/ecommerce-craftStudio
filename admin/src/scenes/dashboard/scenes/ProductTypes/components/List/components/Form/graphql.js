import gql from 'graphql-tag';

export const ADD_PRODUCT_ATTRIBUTES = gql`
  mutation ADD_PRODUCT_ATTRIBUTES(
    $attributeName: String!
    $productType: ProductTypeWhereUniqueInput
    $attributeValues: [AttributeValueCreateInput!]
  ) {
    createProductTypeAttribute(
      attributeName: $attributeName
      productType: { connect: $productType }
      attributeValues: { create: $attributeValues }
    ) {
      attributeName
      productType {
        name
      }
    }
  }
`;
