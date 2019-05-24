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
    $attributeValues: [AttributeValueCreateInput!]
  ) {
    updateProductTypeAttribute(
      id: $id
      attributeName: $attributeName
      attributeValues: { create: $attributeValues }
    ) {
      attributeName
      productType {
        name
      }
    }
  }
`;

export const DELETE_PRODUCT_ATTRIBUTE = gql`
  mutation DELETE_PRODUCT_ATTRIBUTE($id: ID) {
    deleteAttribute(id: $id) {
      attributeName
    }
  }
`;
