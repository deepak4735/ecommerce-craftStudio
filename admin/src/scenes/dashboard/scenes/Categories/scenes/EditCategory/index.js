import React, { useState } from 'react';
import { Mutation, Query } from 'react-apollo';
import { withRouter } from 'react-router';

// Import components
import {
  Label,
  Input,
  TextArea
} from '../../../../../../components/FormElements/formElements';
import DeleteBtn from './components/deleteBtn';

// Import styles
import {
  EditCategoryContainer,
  FormContainer,
  ElementsContainer,
  Button
} from './styles';

// Import graphQl
import { QUERY_CATEGORY, UPDATE_CATEGORY_MUTATION } from './graphql';
import { QUERY_ALL_CATEGORIES } from '../../graphql';

const EditCategory = props => {
  const [state, setState] = useState({});

  const update = (cache, payload) => {
    const data = cache.readQuery({ query: QUERY_ALL_CATEGORIES });
    let newItem = {
      ...payload.data.updateCategory
    };

    cache.writeQuery({
      query: QUERY_ALL_CATEGORIES,
      data: { categories: data.categories.concat(newItem) }
    });
  };

  const { id } = props.match.params;
  return (
    <Query query={QUERY_CATEGORY} variables={{ id }}>
      {({ data, loading, error }) => {
        console.log(data);
        if (loading) return <p>loading..</p>;

        return (
          <Mutation
            mutation={UPDATE_CATEGORY_MUTATION}
            variables={{ id, ...state }}
            update={update}
          >
            {(updateCategory, { loading, error }) => {
              return (
                <EditCategoryContainer>
                  <FormContainer
                    onSubmit={async e => {
                      e.preventDefault();
                      const res = await updateCategory();
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
                        defaultValue={data.category.name}
                        onChange={e =>
                          setState({ ...state, name: e.target.value })
                        }
                      />
                    </ElementsContainer>
                    <ElementsContainer flexDirection='column' flexBasis='50%'>
                      <Label fontWeight='500' htmlFor='description'>
                        Description
                      </Label>
                      <TextArea
                        flexBasis='100%'
                        defaultValue={data.category.description}
                        onChange={e =>
                          setState({ ...state, description: e.target.value })
                        }
                      />
                    </ElementsContainer>
                    <ElementsContainer
                      justifyContent='space-between'
                      flexDirection='row'
                      flexBasis='10%'
                      width='45%'
                    >
                      <DeleteBtn id={id} />
                      <Button>Submit</Button>
                    </ElementsContainer>
                  </FormContainer>
                </EditCategoryContainer>
              );
            }}
          </Mutation>
        );
      }}
    </Query>
  );
};

export default withRouter(EditCategory);
