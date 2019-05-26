import React from 'react';
import { Mutation } from 'react-apollo';

// Import styles
import { Button } from '../styles';

// Import graphQl
import { DELETE_BUTTON_MUTATION } from '../graphql';
import { QUERY_ALL_CATEGORIES } from '../../../graphql';

const DeleteBtn = props => {
  const update = (cache, payload) => {
    const data = cache.readQuery({ query: QUERY_ALL_CATEGORIES });
    data.categories = data.categories.filter(
      category => category.id !== payload.data.deleteCategory.id
    );

    cache.writeQuery({ query: QUERY_ALL_CATEGORIES, data });
  };
  const { id } = props;
  return (
    <Mutation
      update={update}
      mutation={DELETE_BUTTON_MUTATION}
      variables={{ id }}
    >
      {(deleteCategory, { loading, error }) => (
        <Button
          onClick={async e => {
            e.preventDefault();
            const res = await deleteCategory();
          }}
        >
          Delete
        </Button>
      )}
    </Mutation>
  );
};

export default DeleteBtn;
