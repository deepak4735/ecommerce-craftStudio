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
  NewCategoryContainer,
  FormContainer,
  ElementsContainer,
  Button
} from './styles';

// Import graphQl
import { CREATE_NEW_CATEGORY } from './graphql';
import { QUERY_ALL_CATEGORIES } from '../../graphql';

const CreateNewCat = props => {
  const [state, setState] = useState({
    name: '',
    description: ''
  });

  const update = (cache, payload) => {
    const data = cache.readQuery({ query: QUERY_ALL_CATEGORIES });

    let newItem = {
      ...payload.data.createCategory,
      productsInCategory: []
    };

    cache.writeQuery({
      query: QUERY_ALL_CATEGORIES,
      data: { categories: data.categories.concat(newItem) }
    });
  };

  const { name, description } = state;

  return (
    <Mutation
      update={update}
      mutation={CREATE_NEW_CATEGORY}
      variables={{ name, description }}
    >
      {(createCategory, { loading, error }) => (
        <NewCategoryContainer>
          <FormContainer
            onSubmit={async e => {
              e.preventDefault();
              const res = await createCategory();
              console.log(res);
              if (!error && !loading) {
                props.history.goBack();
              }
            }}
          >
            <ElementsContainer flexDirection='column' flexBasis='18%'>
              <Label fontWeight='500' htmlFor='name'>
                Name
              </Label>
              <Input
                id='name'
                placeholder='Enter a name for the category'
                type='text'
                flexBasis='100%'
                value={state.name}
                onChange={e => setState({ ...state, name: e.target.value })}
              />
            </ElementsContainer>
            <ElementsContainer flexDirection='column' flexBasis='50%'>
              <Label fontWeight='500' htmlFor='description'>
                Description
              </Label>
              <TextArea
                flexBasis='100%'
                value={state.description}
                onChange={e =>
                  setState({ ...state, description: e.target.value })
                }
              />
            </ElementsContainer>
            <ElementsContainer
              justifyContent='flex-end'
              flexDirection='row'
              flexBasis='10%'
            >
              <Button>Submit</Button>
            </ElementsContainer>
          </FormContainer>
        </NewCategoryContainer>
      )}
    </Mutation>
  );
};

export default withRouter(CreateNewCat);
