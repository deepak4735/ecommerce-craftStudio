import React from 'react';
import { Mutation } from 'react-apollo';
import { withRouter } from 'react-router';

// Import GraphQL
import { DELETE_TAX_MUTATION } from '../graphql';
import { QUERY_ALL_TAXES } from '../../../graphql';

// Import styles
import { Button } from '../styles';

const DeleteButton = props => {
  const { id } = props;

  const update = (cache, payload) => {
    const data = cache.readQuery({ query: QUERY_ALL_TAXES });
    data.taxes = data.taxes.filter(tax => tax.id !== payload.data.deleteTax.id);

    cache.writeQuery({ query: QUERY_ALL_TAXES, data });
  };

  return (
    <Mutation mutation={DELETE_TAX_MUTATION} variables={{ id }} update={update}>
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
