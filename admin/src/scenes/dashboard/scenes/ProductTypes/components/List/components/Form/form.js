import React, { useState } from 'react';

// Import styles
import { FormContainer } from './styles';
import {
  Label,
  Input
} from '../../../../../../../../components/FormElements/formElements';
import { Container } from '../../../../../../../../components/Container/Container';

const Form = props => {
  const [state, setState] = useState({
    attributeName: '',
    attributeValue: '',
    attributeValues: []
  });

  const handleAttribute = e => {
    let value = e.target.value;
    let id = e.target.id;

    setState({
      ...state,
      [id]: value
    });
  };

  const addAttributeValue = e => {
    let attrValue = state.attributeValue;

    setState({
      ...state,
      attributeValue: '',
      attributeValues: [...state.attributeValues, attrValue]
    });
  };

  const addProductVariant = () => {
    let payload = state;
    props.handleProductAttributes(state);
    setState({
      attributeName: '',
      attributeValue: '',
      attributeValues: []
    });
    props.toggle();
  };
  console.log(state);
  return (
    <FormContainer>
      <Container flexDirection='column'>
        <Label htmlfor='attributeName'>Attribute name</Label>
        <Input
          id='attributeName'
          value={state.attributeName}
          onChange={e => handleAttribute(e)}
        />
      </Container>
      <Container flexDirection='column'>
        <Label htmlfor='attributeValue'>Attribute value</Label>
        <Input
          value={state.attributeValue}
          id='attributeValue'
          onChange={e => handleAttribute(e)}
        />
        <button id='submit' onClick={e => addAttributeValue(e)}>
          Add value
        </button>
      </Container>
      <Container>
        {state.attributeValues.map(el => (
          <p>{el}</p>
        ))}
      </Container>
      <button onClick={() => addProductVariant()}>Add product attribute</button>
    </FormContainer>
  );
};

export default Form;
