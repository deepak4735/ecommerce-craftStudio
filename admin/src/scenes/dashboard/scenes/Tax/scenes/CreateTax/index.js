import React, { useState } from 'react';
import { Mutation } from 'react-apollo';
import { withRouter } from 'react-router';

// Import components
import {
  Label,
  Input,
  TextArea
} from '../../../../../../components/FormElements/formElements';

// Import styles
import {
  CreateTaxContainer,
  FormContainer,
  ElementsContainer,
  Button
} from './styles';

// Import GraphQL
import { CREATE_NEW_TAX } from './graphql';
import { QUERY_ALL_TAXES } from '../../graphql';

const CreateTax = props => {
  const [state, setState] = useState({
    name: '',
    taxRate: ''
  });

  const update = (cache, payload) => {
    const data = cache.readQuery({ query: QUERY_ALL_TAXES });

    console.log(data);
    console.log(payload);

    let newItem = {
      ...payload.data.createTax
    };

    cache.writeQuery({
      query: QUERY_ALL_TAXES,
      data: { taxes: data.taxes.concat(newItem) }
    });
  };

  const { name, taxRate } = state;
  console.log(props);

  return (
    <Mutation
      mutation={CREATE_NEW_TAX}
      variables={{ name, taxRate }}
      update={update}
      // onComplete={() => props.history.goBack()}
      onComplete={data => console.log(data)}
    >
      {(createTax, { loading, error }) => (
        <CreateTaxContainer>
          <FormContainer
            onSubmit={async e => {
              e.preventDefault();
              const res = await createTax();
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
                onChange={e => setState({ ...state, name: e.target.value })}
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
                  setState({ ...state, taxRate: parseInt(e.target.value) })
                }
              />
            </ElementsContainer>
            <ElementsContainer
              justifyContent='center'
              flexDirection='row'
              width='33%'
            >
              <Button>Submit</Button>
            </ElementsContainer>
          </FormContainer>
        </CreateTaxContainer>
      )}
    </Mutation>
  );
};

export default withRouter(CreateTax);
