import React, { useState } from 'react';

// Import components
import List from '../components/List/list';

// Import styles
import {
  CreateProductTypeContainer,
  TextAreaContainer,
  BooleanAreaContainer,
  FormContainer
} from './styles';

import {
  Label,
  Input
} from '../../../../../components/FormElements/formElements';

import { Container } from '../../../../../components/Container/Container';

const CreateNewProdType = () => {
  const [state, setState] = useState({
    typeName: '',
    productAttributes: [],
    variantAttributes: ['sfafsasafsa'],
    hasVariants: false,
    isShippingRequired: false
  });

  const handleProductAttributes = payload => {
    console.log(payload);
    setState({
      ...state,
      productAttributes: [...state.productAttributes, payload]
    });
  };

  return (
    <CreateProductTypeContainer>
      <FormContainer>
        <TextAreaContainer>
          <Container flexDirection='column' height='7rem'>
            <Label flexBasis='35%' htmlFor='typeName'>
              Type Name
            </Label>
            <Input
              inputPadding='0.5rem'
              width='80%'
              flexBasis='65%'
              type='text'
              id='typeName'
              placeholder='Enter the type name'
            />
          </Container>
          <Container flexDirection='column' margin='3rem 0 0 0'>
            <Label flexBasis='35%' htmlFor='productAttributes'>
              Product attributes
            </Label>
            <List
              handleProductAttributes={payload =>
                handleProductAttributes(payload)
              }
              height='100%'
              width='100%'
              headers={['Name', 'Values']}
              addBtn={true}
              listItemArray={state.productAttributes}
            />
          </Container>
          {state.hasVariants && (
            <Container flexDirection='column' margin='3rem 0 0 0'>
              <Label flexBasis='35%' htmlFor='VariantAttributes'>
                Variant attributes
              </Label>
              <List
                handleProductAttributes={payload =>
                  handleProductAttributes(payload)
                }
                height='100%'
                width='100%'
                headers={['Name', 'Values']}
                addBtn={true}
                listItemArray={state.variantAttributes}
              />
            </Container>
          )}
        </TextAreaContainer>
        <BooleanAreaContainer>
          <Container flexDirection='column' height='7rem'>
            <Label flexBasis='35%' htmlFor='shipping'>
              Shipping required
            </Label>
            <Input
              width='70%'
              flexBasis='65%'
              type='checkbox'
              id='shipping'
              inputPadding='0rem'
              onChange={() =>
                setState({ isShippingRequired: !state.isShippingRequired })
              }
            />
          </Container>
          <Container flexDirection='column' height='7rem' margin='3rem 0 0 0'>
            <Label flexBasis='35%' htmlFor='variants'>
              Are there variants?
            </Label>
            <Input
              width='70%'
              flexBasis='65%'
              type='checkbox'
              id='variants'
              onChange={() => setState({ hasVariants: !state.hasVariants })}
            />
          </Container>
        </BooleanAreaContainer>
      </FormContainer>
    </CreateProductTypeContainer>
  );
};

export default CreateNewProdType;
