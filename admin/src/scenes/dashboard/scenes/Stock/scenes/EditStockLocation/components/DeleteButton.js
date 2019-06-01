import React from 'react';
import { Mutation } from 'react-apollo';
import { withRouter } from 'react-router';

// Import GraphQL
import { DELETE_STOCK_LOCATION } from '../graphql';
import { QUERY_ALL_STOCK_LOCATIONS } from '../../../graphql';

// Import styles
import { Button } from '../styles';

const DeleteButton = props => {
  const { id } = props;

  const update = (cache, payload) => {
    const data = cache.readQuery({ query: QUERY_ALL_STOCK_LOCATIONS });
    data.taxes = data.taxes.filter(tax => tax.id !== payload.data.deleteTax.id);

    cache.writeQuery({ query: QUERY_ALL_STOCK_LOCATIONS, data });
  };

  return (
    <Mutation
      mutation={DELETE_STOCK_LOCATION}
      variables={{ id }}
      update={update}
    >
      {(deleteTax, { loading, error }) => (
        <Button
          onClick={async e => {
            e.preventDefault();
            const res = await deleteTax();
            if (!error) {
              props.history.goBack();
            }
            return res;
          }}
          color='danger'
        >
          Delete
        </Button>
      )}
    </Mutation>
  );
};

export default withRouter(DeleteButton);
