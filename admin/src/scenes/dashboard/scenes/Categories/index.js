import React, { useState } from 'react';
import { Query, Mutation } from 'react-apollo';
import { Link } from 'react-router-dom';
import { adopt } from 'react-adopt';
import { withRouter } from 'react-router';

// Import components
import ListItem from './components/ListItem/listItem';

// Import styled
import {
  CategoriesContainer,
  ListNameAndBtnContainer,
  FormContainer,
  FormHeaders,
  FormHeaderElement,
  ListItemContainer,
  ButtonContainer,
  Button
} from './styles';

// Import GraphQL
import { QUERY_ALL_CATEGORIES, DELETE_SELECTED_CATEGORIES } from './graphql';

const Composed = adopt({
  queryCategory: ({ render }) => (
    <Query query={QUERY_ALL_CATEGORIES}>{render}</Query>
  ),
  deleteSelected: ({ render }) => (
    <Mutation mutation={DELETE_SELECTED_CATEGORIES}>{render}</Mutation>
  )
});

const Categories = props => {
  const [state, setState] = useState({
    id_in: []
  });

  const delSelectedCategories = e => {
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

  console.log(props);
  return (
    <Composed>
      {({ queryCategory: { data, refetch, loading }, deleteSelected }) => {
        const categories = data.categories;
        if (loading) return <p>Loading..</p>;

        return (
          <CategoriesContainer>
            <ListNameAndBtnContainer>
              <h2>Categories</h2>
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

                <Link to='/categories/create-new-category'>
                  <Button>Create new category</Button>
                </Link>
              </ButtonContainer>
            </ListNameAndBtnContainer>
            <FormContainer>
              <FormHeaders>
                <div style={{ width: '4rem' }} />
                <FormHeaderElement flexBasis='75%'>Name</FormHeaderElement>
                <FormHeaderElement flexBasis='25%' textAlign='center'>
                  Products in category
                </FormHeaderElement>
              </FormHeaders>
              <ListItemContainer>
                {loading && <p>Loading</p>}
                {categories.map(category => (
                  <ListItem
                    delSelectedCategories={e => delSelectedCategories(e)}
                    data={category}
                    key={category.id}
                    id={category.id}
                  />
                ))}
              </ListItemContainer>
            </FormContainer>
          </CategoriesContainer>
        );
      }}
    </Composed>
  );
};

export default withRouter(Categories);
