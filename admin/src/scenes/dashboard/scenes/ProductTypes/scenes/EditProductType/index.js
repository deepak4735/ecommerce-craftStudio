import React, { useState } from 'react';
import { Query, Mutation } from 'react-apollo';
import { withRouter } from 'react-router';

// Import components
// import ListItem from './components/ListItem/listItem';

// Import components
import {
  Label,
  Input,
  Select
} from '../../../../../../components/FormElements/formElements';

// Import styles
import {
  EditProductTypeContainer,
  LeftSideContainer,
  RightSideContainer,
  ElementsContainer
} from './styles';

import {
  FormContainer,
  FormHeaders,
  FormHeaderElement,
  ListItemContainer
} from '../../styles';

import { QUERY_PRODUCT_TYPE, UPDATE_PRODUCT_TYPE } from './graphql';

const EditProductType = props => {
  const [state, setState] = useState({});
  const id = props.match.params.id;
  return (
    <Query query={QUERY_PRODUCT_TYPE} variables={{ id }}>
      {({ data, loading, error }) => {
        if (loading) return '';
        const { productType } = data;
        console.log(productType);

        return (
          <Mutation mutation={UPDATE_PRODUCT_TYPE} variables={{ id, ...state }}>
            {() => (
              <EditProductTypeContainer>
                <LeftSideContainer>
                  <ElementsContainer
                    flexDirection='column'
                    flexBasis='10%'
                    width='45%'
                  >
                    <Label fontWeight='500' htmlFor='name'>
                      Name
                    </Label>
                    <Input flexBasis='40%' defaultValue={productType.name} />
                  </ElementsContainer>
                  <p>Hello</p>
                </LeftSideContainer>
                <RightSideContainer>
                  <p>Hello</p>
                </RightSideContainer>
              </EditProductTypeContainer>
            )}
          </Mutation>
        );
      }}
    </Query>
  );
};

export default withRouter(EditProductType);
