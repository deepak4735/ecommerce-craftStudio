import React, { useState } from 'react';
import { Query, Mutation } from 'react-apollo';
import { Link } from 'react-router-dom';
import { adopt } from 'react-adopt';

// Import components
import ListItem from './components/ListItem/listItem';

// Import styled
import {
  StockContainer,
  ListNameAndBtnContainer,
  FormContainer,
  FormHeaders,
  FormHeaderElement,
  ListItemContainer,
  ButtonContainer,
  Button
} from './styles';

// Import GraphQL
import {
  QUERY_ALL_STOCK_LOCATIONS,
  DELETE_SELECTED_STOCK_LOCATIONS
} from './graphql';

const Composed = adopt({
  queryCategory: ({ render }) => (
    <Query query={QUERY_ALL_STOCK_LOCATIONS}>{render}</Query>
  ),
  deleteSelected: ({ render }) => (
    <Mutation mutation={DELETE_SELECTED_STOCK_LOCATIONS}>{render}</Mutation>
  )
});

const Stock = props => {
  const [state, setState] = useState({
    id_in: []
  });

  const delSelectedStockLocations = e => {
    let checked = e.target.checked;
    let id_in = state.id_in;
    if (checked) {
      id_in.push(e.target.id);
      setState({
        ...state,
        id_in
      });
    } else {
      let id_in = state.id_in.filter(id => id !== e.target.id);
      setState({
        ...state,
        id_in
      });
    }
  };

  console.log(state);
  return (
    <Composed>
      {({ queryCategory: { data, refetch, loading }, deleteSelected }) => {
        const stockLocations = data.stockLocations;
        if (loading) return <p>Loading..</p>;

        return (
          <StockContainer>
            <ListNameAndBtnContainer>
              <h2>Stock Locations</h2>
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
                    }}
                  >
                    Delete selected
                  </Button>
                ) : null}

                <Link to='/stock/create-new-stock-location'>
                  <Button>Create new stock location </Button>
                </Link>
              </ButtonContainer>
            </ListNameAndBtnContainer>

            <FormContainer>
              <FormHeaders>
                <div style={{ width: '4rem' }} />
                <FormHeaderElement flexBasis='33%'>Name</FormHeaderElement>
                <FormHeaderElement flexBasis='33%'>City</FormHeaderElement>
                <FormHeaderElement flexBasis='33%' textAlign='center'>
                  Post Number
                </FormHeaderElement>
              </FormHeaders>
              <ListItemContainer>
                {loading && <p>Loading</p>}
                {stockLocations.map(category => (
                  <ListItem
                    delSelectedStockLocations={e =>
                      delSelectedStockLocations(e)
                    }
                    data={category}
                    key={category.id}
                    id={category.id}
                  />
                ))}
              </ListItemContainer>
            </FormContainer>
          </StockContainer>
        );
      }}
    </Composed>
  );
};

export default Stock;
