import React, { useState } from 'react';
import { Query, Mutation } from 'react-apollo';
import { withRouter } from 'react-router';

// Import List
import List from '../../components/List/list';

// Import styles
import {
  ProductTypeContainer,
  LeftAreaContainer,
  RightAreaContainer,
  FormContainer,
  SubmitOrDelete
} from '../components/styles';

import {
  Label,
  Input
} from '../../../../../../components/FormElements/formElements';

import { Container } from '../../../../../../components/Container/Container';

// Import graphql
import { EDIT_PRODUCT_TYPE, UPDATE_PRODUCT_TYPE } from './graphql';

const EditProductType = props => {
  const [state, setState] = useState({});

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

  let id = props.match.params.id;

  console.log(state);
  return (
    <Query query={EDIT_PRODUCT_TYPE} variables={{ id }}>
      {({ data, loading, error }) => {
        console.log(data);
        if (loading) return <p>Loading...</p>;

        return (
          <Mutation
            mutation={UPDATE_PRODUCT_TYPE}
            variables={{
              id,
              name: state.typeName,
              hasVariants: state.hasVariants,
              shippingRequired: state.shippingRequired,
              weight: state.weight,
              tax: state.tax
            }}
          >
            {updateProductTypeAttribute => {
              return (
                <ProductTypeContainer>
                  <FormContainer
                    onSubmit={async e => {
                      e.preventDefault();
                      const res = await updateProductTypeAttribute();
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
                          defaultValue={data.productType.name}
                        />
                      </Container>
                      <Container flexDirection='column' margin='3rem 0 0 0'>
                        <Label flexBasis='35%' htmlFor='productAttributes'>
                          Product attributes
                        </Label>
                        <List
                          // handleAttributes={payload => handleAttributes(payload)}
                          height='100%'
                          width='100%'
                          attributeType='product'
                          headers={['Name', 'Values']}
                          addBtn={true}
                          productId={id}
                          listItemArray={data.productType.productAttributes}
                        />
                      </Container>
                      {state.hasVariants && (
                        <Container flexDirection='column' margin='3rem 0 0 0'>
                          <Label flexBasis='35%' htmlFor='VariantAttributes'>
                            Variant attributes
                          </Label>
                          <List
                            // handleAttributes={payload => handleAttributes(payload)}
                            height='100%'
                            attributeType='variant'
                            width='100%'
                            headers={['Name', 'Values']}
                            addBtn={true}
                            listItemArray={data.productType.variantAttributes}
                          />
                        </Container>
                      )}
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
                          defaultChecked={data.productType.shippingRequired}
                          onChange={() =>
                            setState({
                              ...state,
                              shippingRequired:
                                state.shippingRequired === undefined
                                  ? !data.productType.shippingRequired
                                  : !state.shippingRequired
                            })
                          }
                        />
                      </Container>
                      <fieldset
                        disabled={!state.shippingRequired}
                        style={{
                          border: 'none',
                          opacity:
                            state.shippingRequired === false ||
                            data.productType.shippingRequired === false
                              ? '0.5'
                              : '1'
                        }}
                      >
                        <Container
                          margin='3rem 0 0 0'
                          flexDirection='column'
                          height='8rem'
                          width='20rem'
                        >
                          <Label flexBasis='35%' htmlFor='weight'>
                            Weight
                          </Label>
                          <Container
                            width='100%'
                            alignmentJustify='space-between'
                          >
                            <Input
                              width='70%'
                              flexBasis='70%'
                              type='number'
                              id='weight'
                              inputPadding='1rem'
                              onChange={e => handleInputs(e)}
                              name='value'
                              defaultValue={data.productType.weight.value}
                            />
                            <Input
                              width='20%'
                              flexBasis='20%'
                              type='text'
                              id='weight'
                              inputPadding='1rem'
                              onChange={e => handleInputs(e)}
                              name='unit'
                              defaultValue={data.productType.weight.unit}
                            />
                          </Container>
                        </Container>
                      </fieldset>

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
                          // defaultValue={}
                          checked={data.productType.hasVariants}
                          onChange={() =>
                            setState({
                              ...state,
                              hasVariants:
                                state.hasVariants === undefined
                                  ? !data.productType.hasVariants
                                  : !state.hasVariants
                            })
                          }
                        />
                      </Container>

                      <Container
                        margin='3rem 0 0 0'
                        flexDirection='column'
                        height='8rem'
                        width='20rem'
                      >
                        <Label flexBasis='35%' htmlFor='tax'>
                          Tax
                        </Label>
                        <Container
                          width='100%'
                          alignmentJustify='space-between'
                        >
                          <Input
                            width='70%'
                            flexBasis='70%'
                            type='text'
                            id='tax'
                            name='name'
                            inputPadding='1rem'
                            placeholder='name of tax'
                            onChange={e => handleInputs(e)}
                            defaultValue={data.productType.taxes.name}
                          />
                          <Input
                            width='25%'
                            flexBasis='25%'
                            type='number'
                            name='taxRate'
                            id='tax'
                            inputPadding='1rem'
                            onChange={e => handleInputs(e)}
                            defaultValue={data.productType.taxes.taxRate}
                          />
                        </Container>
                      </Container>
                    </RightAreaContainer>
                    <SubmitOrDelete>
                      <button>Delete</button>
                      <button>Submit</button>
                    </SubmitOrDelete>
                  </FormContainer>
                </ProductTypeContainer>
              );
            }}
          </Mutation>
        );
      }}
    </Query>
  );
};

export default withRouter(EditProductType);
