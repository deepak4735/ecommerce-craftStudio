import React, { useState } from 'react';
import { Query, Mutation } from 'react-apollo';
import { withRouter } from 'react-router';

// Import components
import {
  Label,
  Input
} from '../../../../../../components/FormElements/formElements';

import DeleteButton from './components/DeleteButton';

// Import styles
import {
  EditTaxContainer,
  FormContainer,
  ElementsContainer,
  Button
} from './styles';

// Import GraphQL
import { QUERY_TAX, UPDATE_TAX_MUTATION } from './graphql';

const EditTax = props => {
  const [state, setState] = useState({});
  const id = props.match.params.id;
  console.log(state);
  return (
    <Query query={QUERY_TAX} variables={{ id }}>
      {({ data, loading, error }) => {
        if (loading) return <p>loading..</p>;
        return (
          <Mutation mutation={UPDATE_TAX_MUTATION} variables={{ id, ...state }}>
            {(updateTax, { loading, error }) => (
              <EditTaxContainer>
                <FormContainer
                  onSubmit={async e => {
                    e.preventDefault();
                    const res = await updateTax();
                    console.log(res);
                    if (!error && !loading) {
                      props.history.goBack();
                    }
                  }}
                >
                  <ElementsContainer
                    flexDirection='column'
                    flexBasis='17%'
                    width='33%'
                  >
                    <Label htmlFor='name'>Tax type</Label>
                    <Input
                      flexBasis='100%'
                      type='text'
                      onChange={e =>
                        setState({ ...state, name: e.target.value })
                      }
                      defaultValue={data.tax.name}
                    />
                  </ElementsContainer>
                  <ElementsContainer
                    flexDirection='column'
                    flexBasis='17%'
                    width='33%'
                  >
                    <Label htmlFor='taxRate'>Procentage</Label>
                    <Input
                      flexBasis='100%'
                      type='number'
                      onChange={e =>
                        setState({
                          ...state,
                          taxRate: parseInt(e.target.value)
                        })
                      }
                      defaultValue={data.tax.taxRate}
                    />
                  </ElementsContainer>
                  <ElementsContainer
                    justifyContent='space-between'
                    flexDirection='row'
                    width='60%'
                  >
                    <DeleteButton id={props.match.params.id} />
                    <Button>Submit</Button>
                  </ElementsContainer>
                </FormContainer>
              </EditTaxContainer>
            )}
          </Mutation>
        );
      }}
    </Query>
  );
};

export default withRouter(EditTax);
