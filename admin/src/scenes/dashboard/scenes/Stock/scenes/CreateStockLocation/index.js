import React, { useState } from 'react';
import { Mutation } from 'react-apollo';
import { withRouter } from 'react-router';

// Import components
import {
  Label,
  Input
} from '../../../../../../components/FormElements/formElements';

// Import styles
import {
  CreateStockLocContainer,
  FormContainer,
  ElementsContainer,
  Button
} from './styles';

// Import GraphQL
import { CREATE_NEW_STOCK_LOCATION } from './graphql';
import { QUERY_ALL_STOCK_LOCATIONS } from '../../graphql';

const CreateStockLocation = props => {
  const [state, setState] = useState({
    name: '',
    address: '',
    postNumber: 1234,
    city: ''
  });

  const update = (cache, payload) => {
    const data = cache.readQuery({ query: QUERY_ALL_STOCK_LOCATIONS });

    console.log(data);
    console.log(payload);

    let newItem = {
      ...payload.data.createStockLocation
    };

    cache.writeQuery({
      query: QUERY_ALL_STOCK_LOCATIONS,
      data: { stockLocations: data.stockLocations.concat(newItem) }
    });
  };

  const { name, address, postNumber, city } = state;
  console.log(props);

  return (
    <Mutation
      mutation={CREATE_NEW_STOCK_LOCATION}
      variables={{ name, address, postNumber, city }}
      update={update}
      // onComplete={() => props.history.goBack()}
      onComplete={data => console.log(data)}
    >
      {(createStockLocation, { loading, error }) => (
        <CreateStockLocContainer>
          <FormContainer
            onSubmit={async e => {
              e.preventDefault();
              const res = await createStockLocation();
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
              <Label htmlFor='name'>Location Name</Label>
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
              <Label htmlFor='address'>Location Address</Label>
              <Input
                flexBasis='100%'
                type='text'
                onChange={e => setState({ ...state, address: e.target.value })}
              />
            </ElementsContainer>
            <ElementsContainer
              flexDirection='column'
              flexBasis='17%'
              width='33%'
            >
              <Label htmlFor='postNumber'>Post Number</Label>
              <Input
                flexBasis='100%'
                type='number'
                onChange={e =>
                  setState({ ...state, postNumber: parseInt(e.target.value) })
                }
              />
            </ElementsContainer>
            <ElementsContainer
              flexDirection='column'
              flexBasis='17%'
              width='33%'
            >
              <Label htmlFor='city'>City</Label>
              <Input
                flexBasis='100%'
                type='text'
                onChange={e => setState({ ...state, city: e.target.value })}
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
        </CreateStockLocContainer>
      )}
    </Mutation>
  );
};

export default withRouter(CreateStockLocation);
