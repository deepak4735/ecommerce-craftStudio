import React, { useState } from 'react';

// Import components
import List from '../../../../../components/List/list';

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
    hasVariants: false
  });

  return (
    <CreateProductTypeContainer>
      <FormContainer>
        <TextAreaContainer>
          <Container flexDirection='column' height='7rem'>
            <Label flexBasis='35%' htmlFor='name'>
              Name
            </Label>
            <Input
              inputPadding='0.5rem'
              width='80%'
              flexBasis='65%'
              type='text'
              id='name'
              placeholder='Enter the type name'
            />
          </Container>
          <Container flexDirection='column' margin='3rem 0 0 0'>
            <Label flexBasis='35%' htmlFor='shipping'>
              Product attributes
            </Label>
            <List
              height='100%'
              width='100%'
              headers={['Name', 'Values']}
              addBtn={true}
            />
          </Container>
          {state.hasVariants && (
            <Container flexDirection='column' margin='3rem 0 0 0'>
              <Label flexBasis='35%' htmlFor='shipping'>
                Variant attributes
              </Label>
              <List height='100%' width='100%' headers={['Name', 'Values']} />
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
