import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Query, Mutation } from 'react-apollo';
import gql from 'graphql-tag';

// Import styles
import {
  ProductContainer,
  ProductListContainer,
  FilterOptionsContiner,
  ProductCard,
  ProductCardHeader,
  ProductCardImage,
  ProductCardDescription,
  ProductDetailBtnContainer
} from './styles';

// GraphQL
const ALL_PRODUCTS_QUERY = gql`
  query ALL_PRODUCTS_QUERY {
    products {
      id
      title
      slug
      description
      productImages {
        title
        thumbnail
      }
      price
      available
    }
  }
`;

const DELETE_PRODUCT_MUTATION = gql`
  mutation DELETE_PRODUCT_MUTATION($id: ID!) {
    deleteProduct(id: $id) {
      id
    }
  }
`;

class Products extends Component {
  update = (cache, payload) => {
    const data = cache.readQuery({ query: ALL_PRODUCTS_QUERY });
    console.log(data, payload);
    data.products = data.products.filter(
      product => product.id !== payload.data.deleteProduct.id
    );
    cache.writeQuery({ query: ALL_PRODUCTS_QUERY, data });
  };
  render() {
    return (
      <ProductContainer>
        <Query query={ALL_PRODUCTS_QUERY} refetchQueries={ALL_PRODUCTS_QUERY}>
          {({ data, loading, error }) => {
            console.log(data);
            if (loading) return <p>Loading</p>;
            if (error) return <p>Error: {error.message}</p>;
            return (
              <ProductListContainer>
                {data.products.map(productElement => {
                  return (
                    <ProductCard>
                      <ProductCardHeader>
                        <h3>{productElement.title}</h3>
                      </ProductCardHeader>
                      <ProductCardImage>
                        <img
                          src={productElement.productImages[0].thumbnail}
                          alt={productElement.productImages[0].titel}
                        />
                      </ProductCardImage>
                      <ProductCardDescription>
                        <p>{productElement.description}</p>
                      </ProductCardDescription>
                      <ProductDetailBtnContainer>
                        <Mutation
                          mutation={DELETE_PRODUCT_MUTATION}
                          variables={{ id: productElement.id }}
                          update={this.update}
                        >
                          {(deleteProduct, { error }) => {
                            console.log(error);
                            return (
                              <button onClick={() => deleteProduct()}>
                                Delete Product
                              </button>
                            );
                          }}
                        </Mutation>
                        <button
                          onClick={() => console.log(productElement.slug)}
                        >
                          See item
                        </button>
                      </ProductDetailBtnContainer>
                    </ProductCard>
                  );
                })}
              </ProductListContainer>
            );
          }}
        </Query>
        <FilterOptionsContiner>
          <Link to='/products/create-new-product'>Create a new product</Link>
        </FilterOptionsContiner>
      </ProductContainer>
    );
  }
}

export default Products;
