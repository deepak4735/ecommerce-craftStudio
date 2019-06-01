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
import { QUERY_STOCK_LOCATION, UPDATE_STOCK_LOCATION } from './graphql';
import { QUERY_ALL_STOCK_LOCATIONS } from '../../graphql';

const EditStockLocation = props => {
  const [state, setState] = useState({});
  const id = props.match.params.id;

  const update = (cache, payload) => {
    const data = cache.readQuery({ query: QUERY_ALL_STOCK_LOCATIONS });
    let newItem = {
      ...payload.data.updateStockLocation
    };
    console.log(data);
    cache.writeQuery({
      query: UPDATE_STOCK_LOCATION,
      data: { stockLocations: data.stockLocations.concat(newItem) }
    });
  };

  return (
    <Query query={QUERY_STOCK_LOCATION} variables={{ id }}>
      {({ data, loading, error }) => {
        if (loading) return <p>loading..</p>;
        return (
          <Mutation
            mutation={UPDATE_STOCK_LOCATION}
            variables={{ id, ...state }}
            update={update}
          >
            {(updateStockLocation, { loading, error }) => (
              <EditTaxContainer>
                <FormContainer
                  onSubmit={async e => {
                    e.preventDefault();
                    const res = await updateStockLocation();
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
                    <Label htmlFor='name'>Location Name</Label>
                    <Input
                      flexBasis='100%'
                      type='text'
                      onChange={e =>
                        setState({ ...state, name: e.target.value })
                      }
                      defaultValue={data.stockLocation.name}
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
                      onChange={e =>
                        setState({ ...state, address: e.target.value })
                      }
                      defaultValue={data.stockLocation.address}
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
                        setState({
                          ...state,
                          postNumber: parseInt(e.target.value)
                        })
                      }
                      defaultValue={data.stockLocation.postNumber}
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
                      onChange={e =>
                        setState({ ...state, city: e.target.value })
                      }
                      defaultValue={data.stockLocation.city}
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

export default withRouter(EditStockLocation);
