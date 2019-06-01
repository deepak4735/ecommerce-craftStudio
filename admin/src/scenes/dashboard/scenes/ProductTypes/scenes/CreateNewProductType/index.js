import React, { useState } from 'react';
import { Mutation, Query } from 'react-apollo';

// Import components
import {
  Label,
  Input,
  Select
} from '../../../../../../components/FormElements/formElements';

// Import styles
import {
  NewProductTypeContainer,
  FormContainer,
  ElementsContainer,
  Button
} from './styles';

// Import graphql
import { CREATE_PRODUCT_TYPE, QUERY_ALL_TAXES } from './graphql';

const CreateNewProductType = props => {
  const [state, setState] = useState({
    name: '',
    tax: {
      id: ''
    },
    shippingRequired: false,
    weight: {
      unit: 'kg',
      value: 0
    }
  });

  const { name, tax, shippingRequired, weight } = state;
  console.log(state.tax);
  return (
    <Query query={QUERY_ALL_TAXES}>
      {({ data, loading, error }) => {
        console.log(data);
        if (loading) return '';
        return (
          <Mutation
            mutation={CREATE_PRODUCT_TYPE}
            variables={{ name, tax, shippingRequired, weight }}
          >
            {(createProductType, { loading, error }) => (
              <NewProductTypeContainer>
                <FormContainer
                  onSubmit={async e => {
                    e.preventDefault();
                    const res = await createProductType();
                    console.log(res);
                    if (!error && !loading) {
                      await props.history.push(
                        `/product-types/edit/${res.data.createProductType.id}`
                      );
                    }
                  }}
                >
                  <ElementsContainer flexDirection='column' flexBasis='18%'>
                    <Label fontWeight='500' htmlFor='name'>
                      Name
                    </Label>
                    <Input
                      id='name'
                      placeholder='Enter a name for the product type'
                      type='text'
                      flexBasis='50%'
                      width='100%'
                      value={state.name}
                      onChange={e =>
                        setState({ ...state, name: e.target.value })
                      }
                      required
                    />
                  </ElementsContainer>
                  <ElementsContainer flexDirection='column' flexBasis='18%'>
                    <Label fontWeight='500' htmlFor='shipping'>
                      Does the product type require shipping?
                    </Label>
                    <Input
                      id='shipping'
                      type='checkbox'
                      flexBasis='100%'
                      value={state.shippingRequired}
                      onChange={e =>
                        setState({
                          ...state,
                          shippingRequired: e.target.checked
                        })
                      }
                    />
                  </ElementsContainer>
                  <fieldset
                    disabled={!state.shippingRequired}
                    style={{
                      border: 'none',
                      margin: '0',
                      opacity: state.shippingRequired ? 1 : 0.3
                    }}
                  >
                    <ElementsContainer
                      flexDirection='column'
                      flexBasis='18%'
                      justifyContent='space-between'
                    >
                      <Label flexBasis='35%' htmlFor='weight'>
                        Weight
                      </Label>
                      <ElementsContainer
                        width='50%'
                        justifyContent='space-between'
                      >
                        <Input
                          width='60%'
                          flexBasis='60%'
                          type='number'
                          id='weight'
                          inputPadding='1rem'
                          onChange={e =>
                            setState({
                              ...state,
                              weight: {
                                ...state.weight,
                                value: parseInt(e.target.value)
                              }
                            })
                          }
                          name='value'
                          // value={state.weight.value}
                        />
                        <Input
                          width='30%'
                          flexBasis='30%'
                          type='text'
                          id='weight'
                          inputPadding='1rem'
                          onChange={e =>
                            setState({
                              ...state,
                              weight: {
                                ...state.weight,
                                unit: e.target.value
                              }
                            })
                          }
                          name='unit'
                          defaultValue='kg'
                          // value={state.weight.unit}
                        />
                      </ElementsContainer>
                    </ElementsContainer>
                  </fieldset>

                  <ElementsContainer
                    flexDirection='column'
                    flexBasis='18%'
                    width='50%'
                  >
                    <Label fontWeight='500' htmlFor='tax'>
                      Tax
                    </Label>
                    <Select
                      id='tax'
                      flexBasis='40%'
                      value={state.tax.id}
                      onChange={e =>
                        setState({ ...state, tax: { id: e.target.value } })
                      }
                      required
                    >
                      <option value=''>Please select a tax option</option>
                      {data.taxes.map(tax => (
                        <option key={tax.id} id={tax.id} value={tax.id}>
                          {tax.name}
                        </option>
                      ))}
                    </Select>
                  </ElementsContainer>
                  <Button>Submit</Button>
                </FormContainer>
              </NewProductTypeContainer>
            )}
          </Mutation>
        );
      }}
    </Query>
  );
};

export default CreateNewProductType;
