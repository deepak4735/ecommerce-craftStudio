import React, { useState } from 'react';
import { Mutation } from 'react-apollo';

// Import components
import List from '../../components/List/list';

// Import mutation
import { CREATE_PRODUCT_TYPE } from './newProductMutation';

// Import styles
import {
  ProductTypeContainer,
  LeftAreaContainer,
  RightAreaContainer,
  FormContainer
} from '../components/styles';

import {
  Label,
  Input
} from '../../../../../../components/FormElements/formElements';

import { Container } from '../../../../../../components/Container/Container';

const CreateNewProdType = () => {
  const [state, setState] = useState({
    typeName: '',
    productAttributes: [],
    variantAttributes: [],
    hasVariants: false,
    shippingRequired: false,
    weight: {
      unit: 'kg',
      value: 0
    },
    tax: {
      name: '',
      taxRate: 0
    }
  });

  const handleAttributes = payload => {
    setState({
      ...state,
      productAttributes: [...state.productAttributes, payload]
    });
  };

  const handleInputs = e => {
    const id = e.target.id;
    const name = e.target.name;
    let value = e.target.value;

    if (name === 'taxRate' || name === 'value') {
      value = parseInt(value);
    }

    if (id === 'typeName') {
      setState({
        ...state,
        typeName: value
      });
    } else {
      setState({
        ...state,
        [id]: {
          ...state[id],
          [name]: value
        }
      });
    }
  };

  const { typeName, shippingRequired, weight, tax } = state;
  // console.log(productAttributes);
  return (
    <Mutation
      mutation={CREATE_PRODUCT_TYPE}
      variables={{
        typeName,
        shippingRequired,
        weight,
        tax
      }}
    >
      {(createProductType, { loading, error }) => (
        <ProductTypeContainer>
          <FormContainer
            onSubmit={async e => {
              e.preventDefault();
              const res = await createProductType();
              console.log(res);
            }}
          >
            <LeftAreaContainer>
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
                  onChange={e => handleInputs(e)}
                />
              </Container>
              {/*
                <Container flexDirection='column' margin='3rem 0 0 0'>
                <Label flexBasis='35%' htmlFor='productAttributes'>
                  Product attributes
                </Label>
                <List
                  handleAttributes={payload => handleAttributes(payload)}
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
                    handleAttributes={payload => handleAttributes(payload)}
                    height='100%'
                    width='100%'
                    headers={['Name', 'Values']}
                    addBtn={true}
                    listItemArray={state.variantAttributes}
                  />
                </Container>
              )}
              */}
            </LeftAreaContainer>
            <RightAreaContainer>
              <Container
                margin='3rem 0 0 0'
                flexDirection='column'
                height='7rem'
                width='20rem'
              >
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
                    setState({
                      ...state,
                      shippingRequired: !state.shippingRequired
                    })
                  }
                />
              </Container>
              {state.shippingRequired && (
                <Container
                  margin='3rem 0 0 0'
                  flexDirection='column'
                  height='8rem'
                  width='20rem'
                >
                  <Label flexBasis='35%' htmlFor='weight'>
                    Weight
                  </Label>
                  <Container width='100%' alignmentJustify='space-between'>
                    <Input
                      width='70%'
                      flexBasis='70%'
                      type='number'
                      id='weight'
                      inputPadding='1rem'
                      onChange={e => handleInputs(e)}
                      name='value'
                      value={state.weight.value}
                    />
                    <Input
                      width='20%'
                      flexBasis='20%'
                      type='text'
                      id='weight'
                      inputPadding='1rem'
                      onChange={e => handleInputs(e)}
                      name='unit'
                      value={state.weight.unit}
                    />
                  </Container>
                </Container>
              )}
              {/*
                <Container
                flexDirection='column'
                height='7rem'
                margin='3rem 0 0 0'
                width='20rem'
              >
                <Label flexBasis='35%' htmlFor='variants'>
                  Are there variants?
                </Label>
                <Input
                  width='70%'
                  flexBasis='65%'
                  type='checkbox'
                  id='variants'
                  onChange={() =>
                    setState({ ...state, hasVariants: !state.hasVariants })
                  }
                />
              </Container>
                */}
              <Container
                margin='3rem 0 0 0'
                flexDirection='column'
                height='8rem'
                width='20rem'
              >
                <Label flexBasis='35%' htmlFor='tax'>
                  Tax
                </Label>
                <Container width='100%' alignmentJustify='space-between'>
                  <Input
                    width='70%'
                    flexBasis='70%'
                    type='text'
                    id='tax'
                    name='name'
                    inputPadding='1rem'
                    placeholder='name of tax'
                    onChange={e => handleInputs(e)}
                    value={state.tax.name}
                  />
                  <Input
                    width='25%'
                    flexBasis='25%'
                    type='number'
                    name='taxRate'
                    id='tax'
                    inputPadding='1rem'
                    onChange={e => handleInputs(e)}
                    value={state.tax.taxRate}
                  />
                </Container>
              </Container>
            </RightAreaContainer>
            <button>Submit</button>
          </FormContainer>
        </ProductTypeContainer>
      )}
    </Mutation>
  );
};

export default CreateNewProdType;
