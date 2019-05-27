import React, { useState } from 'react';
import { Query, Mutation } from 'react-apollo';
import { Link } from 'react-router-dom';
import { adopt } from 'react-adopt';

// Import components
import ListItem from './components/ListItem/listItem';

// Import styled
import {
  TaxesContainer,
  FormContainer,
  FormHeaders,
  FormHeaderElement,
  ListItemContainer,
  ButtonContainer,
  Button
} from './styles';

// Import GraphQL
import { QUERY_ALL_TAXES, DELETE_SELECTED_TAXES } from './graphql';

const Composed = adopt({
  queryTaxes: ({ render }) => <Query query={QUERY_ALL_TAXES}>{render}</Query>,
  deleteSelected: ({ render }) => (
    <Mutation mutation={DELETE_SELECTED_TAXES}>{render}</Mutation>
  )
});

const Taxes = props => {
  const [state, setState] = useState({
    id_in: []
  });

  const delSelectedTaxes = e => {
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
      {({ queryTaxes: { data, refetch, loading }, deleteSelected }) => {
        console.log(data);
        const taxes = data.taxes;
        if (loading) return <p>Loading..</p>;

        return (
          <TaxesContainer>
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

              <Link to='/taxes/create-new-category'>
                <Button>Create new tax type</Button>
              </Link>
            </ButtonContainer>
            <FormContainer>
              <FormHeaders>
                <div style={{ width: '4rem' }} />
                <FormHeaderElement flexBasis='75%'>Tax</FormHeaderElement>
                <FormHeaderElement flexBasis='25%' textAlign='center'>
                  Tax Rate
                </FormHeaderElement>
              </FormHeaders>
              <ListItemContainer>
                {loading && <p>Loading</p>}
                {taxes.map(category => (
                  <ListItem
                    delSelectedtaxes={e => delSelectedTaxes(e)}
                    data={category}
                    key={category.id}
                    id={category.id}
                  />
                ))}
              </ListItemContainer>
            </FormContainer>
          </TaxesContainer>
        );
      }}
    </Composed>
  );
};

export default Taxes;
