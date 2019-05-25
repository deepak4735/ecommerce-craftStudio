import React from 'react';
import styled from 'styled-components';
import Delete from '@material-ui/icons/Delete';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

// GraphQL
const DELETE_ATTRIBUTE_VALUE = gql`
  mutation DELETE_ATTRIBUTE_VALUE($id: ID!) {
    deleteAttributeValue(id: $id) {
      value
    }
  }
`;

export const AttribueValue = styled.div`
  /* flex: 0 1 3rem; */
  display: flex;
  align-items: center;
  background: ${props => props.theme.accentOne};
  height: 3rem;
  padding-left: 0.5rem;
  border-radius: 0.75rem;
  margin-right: 1rem;

  svg {
    color: white;
    height: 1.5rem;
    cursor: pointer;
  }
`;

export const Value = styled.p`
  margin: 0;
  color: white;
  /* flex: 0 1 4rem; */
  max-height: 3rem;
`;

const AttributeValue = props => {
  const { value } = props.data;
  console.log(props);
  return (
    <Mutation
      mutation={DELETE_ATTRIBUTE_VALUE}
      variables={{ id: props.data.id }}
    >
      {(deleteAttributeValue, { loading, error }) => (
        <AttribueValue key={props.id}>
          <Value>{value}</Value>
          <Delete
            onClick={async e => {
              e.preventDefault();
              const res = await deleteAttributeValue();
              console.log(res);
            }}
          />
        </AttribueValue>
      )}
    </Mutation>
  );
};

export default AttributeValue;
