import React, { useState } from 'react';
import { Query, Mutation } from 'react-apollo';
import { Link } from 'react-router-dom';
import { adopt } from 'react-adopt';

// Import components
import ListItem from './components/ListItem/listItem';

// Import styled
import {
  TaxesContainer,
  ListNameAndBtnContainer,
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
      {({ queryTaxes: { data, refetch, loading }, deleteSelected }) => {
        const taxes = data.taxes;
        if (loading) return <p>Loading..</p>;

        return (
          <TaxesContainer>
            <ListNameAndBtnContainer>
              <h2>Tax</h2>
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

                <Link to='/taxes/create-new-tax'>
                  <Button>Create new tax type</Button>
                </Link>
              </ButtonContainer>
            </ListNameAndBtnContainer>

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
                    delSelectedTaxes={e => delSelectedTaxes(e)}
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
