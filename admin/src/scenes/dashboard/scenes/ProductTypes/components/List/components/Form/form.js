import React, { useState, useEffect } from 'react';
import { useSpring } from 'react-spring';
import { Mutation } from 'react-apollo';
import { Close } from '@material-ui/icons';

// Import styles
import { FormContainer, AttributeValue, FormHeader } from './styles';
import {
  Label,
  Input
} from '../../../../../../../../components/FormElements/formElements';
import { Container } from '../../../../../../../../components/Container/Container';

// Import graphql
import { ADD_PRODUCT_ATTRIBUTES, UPDATE_PRODUCT_ATTRIBUTES } from './graphql';

const Form = props => {
  const [state, setState] = useState({
    attributeName: '',
    attributeValue: '',
    attributeValues: []
  });

  if (props.editAttribute === true) {
    useEffect(() => {
      setState({
        attributeName: props.data.attributeName,
        attributeValues: props.data.attributeValues
      });
    }, [props.toggle]);
  }

  const animateProps = useSpring({ top: `${25}%`, from: { top: `${0}%` } });

  const handleAttribute = e => {
    let value = e.target.value;
    let id = e.target.id;

    setState({
      ...state,
      [id]: value
    });
  };

  const addAttributeValue = e => {
    e.preventDefault();
    let attrValue = state.attributeValue;

    setState({
      ...state,
      attributeValue: '',
      attributeValues: [...state.attributeValues, { value: attrValue }]
    });
  };

  const { productTypeId } = props;
  const { attributeName, attributeValues } = state;
  const productType = {
    id: productTypeId
  };

  const { name, func } = props.mutation;
  console.log(props);

  return (
    <Mutation
      mutation={
        name === 'update' ? UPDATE_PRODUCT_ATTRIBUTES : ADD_PRODUCT_ATTRIBUTES
      }
      variables={{ attributeName, attributeValues, productType }}
    >
      {(func, { loading, error }) => (
        <FormContainer
          style={animateProps}
          onSubmit={async e => {
            e.preventDefault();
            const res = await func();
            console.log(res);
          }}
        >
          <Container
            flexDirection='row'
            height='15%'
            alignmentJustify='space-between'
            alignmentAlign='center'
          >
            <FormHeader style={{ margin: '0' }}>
              Define {props.attributeType} attribute
            </FormHeader>
            <Close onClick={() => props.toggle()} />
          </Container>
          <Container flexDirection='column' height='25%'>
            <Label htmlfor='attributeName'>Attribute name</Label>
            <Input
              flexBasis='4rem'
              id='attributeName'
              value={state.attributeName}
              onChange={e => handleAttribute(e)}
            />
          </Container>
          <Container
            flexDirection='row'
            height='20%'
            alignmentJustify='space-between'
            alignmentAlign='center'
          >
            <Container flexDirection='column'>
              <Label htmlfor='attributeValue'>Attribute value</Label>
              <Input
                flexBasis='4rem'
                value={state.attributeValue}
                id='attributeValue'
                onChange={e => handleAttribute(e)}
              />
            </Container>

            <button id='submit' onClick={e => addAttributeValue(e)}>
              Add value
            </button>
          </Container>
          <Container height='30%' wrap='wrap' background='white'>
            {state.attributeValues.map((el, i) => (
              <AttributeValue key={i} id={i}>
                {el.value}
              </AttributeValue>
            ))}
          </Container>
          <button>Add product attribute</button>
        </FormContainer>
      )}
    </Mutation>
  );
};

export default Form;
