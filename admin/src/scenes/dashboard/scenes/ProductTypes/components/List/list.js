import React from 'react';
import AddCircle from '@material-ui/icons/AddCircle';

// Import styles
import { ListContainer, ListHeaders, ProductList, HeaderItem } from './styles';

// Import components
import ListItem from './components/ListItem/listItem';
import Form from './components/Form/form';
import Toggle from '../../../../../../components/Toggle/Toggle';
import Modal from '../../../../../../components/Modal/Modal';

const ListComponent = props => {
  const { headers, listItemArray, width, height, addBtn } = props;
  console.log(props);
  return (
    <ListContainer width={width} height={height}>
      <ListHeaders>
        {headers.map(header => (
          <HeaderItem>{header}</HeaderItem>
        ))}
        {addBtn && (
          <Toggle>
            {({ on, toggle }) => (
              <>
                <HeaderItem className='list__withAddBtn'>
                  <AddCircle onClick={toggle} />
                </HeaderItem>
                {on && (
                  <Modal toggle={toggle} on={on}>
                    <Form
                      attributeType={props.attributeType}
                      productTypeId={props.productId}
                      toggle={toggle}
                      on={on}
                      editAttribute={false}
                      mutation={{
                        name: 'add',
                        func: 'createProductTypeAttribute'
                      }}
                      handleAttributes={payload =>
                        props.handleAttributes(payload)
                      }
                    />
                  </Modal>
                )}
              </>
            )}
          </Toggle>
        )}
      </ListHeaders>
      <ProductList>
        {listItemArray !== undefined
          ? listItemArray.map(listItem => <ListItem data={listItem} />)
          : ''}
      </ProductList>
    </ListContainer>
  );
};

export default ListComponent;
