import React from 'react';
import { Mutation } from 'react-apollo';

// Import graphql
import { DELETE_PRODUCT_ATTRIBUTE } from '../graphql';

const DeleteButton = props => {
  const { id } = props;
  return (
    <Mutation mutation={DELETE_PRODUCT_ATTRIBUTE} variables={{ id }}>
      {deleteAttribute => (
        <button
          onClick={async e => {
            e.preventDefault();
            const res = await deleteAttribute();
            console.log(res);
          }}
        >
          Delete product attribute
        </button>
      )}
    </Mutation>
  );
};

export default DeleteButton;
