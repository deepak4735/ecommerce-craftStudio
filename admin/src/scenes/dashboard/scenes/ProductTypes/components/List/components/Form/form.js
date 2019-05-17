import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

// Import styles
import { FormContainer, AttributeValue } from './styles';
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
    let attrValue = state.attributeValue;

    setState({
      ...state,
      attributeValue: '',
      attributeValues: [...state.attributeValues, attrValue]
    });
  };

  const addProductVariant = () => {
    let payload = {
      attributeName: state.attributeName,
      attributeValues: [...state.attributeValues]
    };
    props.handleAttributes(payload);
    setState({
      attributeName: '',
      attributeValue: '',
      attributeValues: []
    });
    props.toggle();
  };

  return (
    <FormContainer style={animateProps}>
      <Container flexDirection='column' height='25%'>
        <Label htmlfor='attributeName'>Attribute name</Label>
        <Input
          id='attributeName'
          value={state.attributeName}
          onChange={e => handleAttribute(e)}
        />
      </Container>
      <Container flexDirection='column' height='25%'>
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
      <Container height='50%' wrap='wrap'>
        {state.attributeValues.map((el, i) => (
          <AttributeValue key={i} id={i}>
            {el}
          </AttributeValue>
        ))}
      </Container>
      <button onClick={() => addProductVariant()}>Add product attribute</button>
    </FormContainer>
  );
};

export default Form;
