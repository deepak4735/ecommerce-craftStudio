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

export const UPDATE_PRODUCT_ATTRIBUTES = gql`
  mutation UPDATE_PRODUCT_ATTRIBUTES(
    $id: ID
    $attributeName: String!
    $productType: ProductTypeWhereUniqueInput
    $attributeValues: [AttributeValueCreateInput!]
  ) {
    updateProductTypeAttribute(
      id: $id
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
