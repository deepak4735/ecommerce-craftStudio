import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Query, Mutation } from 'react-apollo';
import { adopt } from 'react-adopt';
import { withRouter } from 'react-router';

// Import components
import ListItem from './components/ListItem/listItem';

// Import styles
import {
  ProductTypeContainer,
  ListNameAndBtnContainer,
  ButtonContainer,
  Button,
  FormContainer,
  FormHeaders,
  FormHeaderElement,
  ListItemContainer
} from './styles';

// Import graphql
import { ALL_PRODUCT_TYPES_QUERY } from './graphql';

const Composed = adopt({
  queryProductTypes: ({ render }) => (
    <Query query={ALL_PRODUCT_TYPES_QUERY}>{render}</Query>
  )
  // deleteSelected: ({ render }) => (
  //   <Mutation mutation={DELETE_SELECTED_CATEGORIES}>{render}</Mutation>
  // )
});

const ProductTypes = () => {
  const [state, setState] = useState({
    id_in: []
  });

  const delSelectedProductTypes = e => {
    let checked = e.target.checked;
    let id = e.target.id;
    id.toString();
    let id_in = state.id_in;
    if (checked) {
      id_in.push(e.target.id);
      setState({
        ...state,
        id_in
      });
    } else if (!checked) {
      let updatedState = state.id_in.filter(itemId => itemId !== id);
      setState({
        id_in: [...updatedState]
      });
    } else {
      let id_in = state.id_in.filter(id => id !== e.target.id);
      setState({
        ...state,
        id_in
      });
    }
  };
  return (
    <Composed>
      {({ queryProductTypes: { data, refetch, loading }, deleteSelected }) => {
        if (loading) return <p>Loading..</p>;
        console.log(data);
        const productTypes = data.productTypes;
        return (
          <ProductTypeContainer>
            <ListNameAndBtnContainer>
              <h2>Product Types</h2>
              <ButtonContainer>
                {state.id_in.length !== 0 ? (
                  <Button
                    color='danger'
                    onClick={async e => {
                      e.preventDefault();
                      await deleteSelected({
                        variables: { id_in: state.id_in }
                      });
                      refetch();
                      setState({ ...state, id_in: [] });
                    }}
                  >
                    Delete selected
                  </Button>
                ) : null}

                <Link to='/product-types/create-product-type'>
                  <Button>Create new product type</Button>
                </Link>
              </ButtonContainer>
            </ListNameAndBtnContainer>
            <FormContainer>
              <FormHeaders>
                <div style={{ width: '4rem' }} />
                <FormHeaderElement flexBasis='25%'>Name</FormHeaderElement>
                <FormHeaderElement flexBasis='25%'>
                  Have variants
                </FormHeaderElement>
                <FormHeaderElement flexBasis='25%'>Weight</FormHeaderElement>
                <FormHeaderElement flexBasis='25%'>Tax</FormHeaderElement>
              </FormHeaders>
              <ListItemContainer>
                {loading && <p>Loading</p>}
                {productTypes.map(productType => (
                  <ListItem
                    delSelectedCategories={e => delSelectedProductTypes(e)}
                    data={productType}
                    key={productType.id}
                    id={productType.id}
                  />
                ))}
              </ListItemContainer>
            </FormContainer>
          </ProductTypeContainer>
        );
      }}
    </Composed>
  );
};

export default withRouter(ProductTypes);

// class ProductTypes extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }
//   render() {
//     return (
//       <ProductTypesContainer>
//         <Query query={ALL_PRODUCT_TYPES_QUERY}>
//           {({ data, loading, error }) => {
//             if (loading) return <p>Loading..</p>;
//             return (
//               <List
//                 listItemArray={data}
//                 headers={['Name', 'Has variants', 'Shipping required']}
//                 width={'80%'}
//                 height={'70%'}
//               />
//             );
//           }}
//         </Query>
//         <Link to='/product-types/create-product-type'>
//           <CreateProductTypeBtn>Create product type</CreateProductTypeBtn>
//         </Link>
//       </ProductTypesContainer>
//     );
//   }
// }

// export default ProductTypes;
