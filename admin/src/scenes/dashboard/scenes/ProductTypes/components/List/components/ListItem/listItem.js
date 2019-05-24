import React from 'react';

// Import components
import Toggle from '../../../../../../../../components/Toggle/Toggle';
import Modal from '../../../../../../../../components/Modal/Modal';
import Form from '../Form/form';

// Import styles
import { ListItemContainer, ItemValue, ItemName, Section } from './styles';

const ListItem = props => {
  const { attributeName, attributeValues } = props.data;
  console.log(props.data);
  return (
    <Toggle>
      {({ on, toggle }) => (
        <>
          <ListItemContainer key={props.data.id} onClick={() => toggle()}>
            <ItemName>{attributeName}</ItemName>
            <Section>
              {attributeValues.map((el, i) => (
                <ItemValue key={el.id}>{el.value}, </ItemValue>
              ))}
            </Section>
          </ListItemContainer>
          {on && (
            <Modal toggle={toggle} on={on}>
              <Form
                id={props.data.id}
                attributeType={props.attributeType}
                productTypeId={props.productId}
                toggle={toggle}
                on={on}
                mutation={{
                  name: 'update',
                  func: 'updateProductTypeAttribute'
                }}
                editAttribute={true}
                data={props.data}
                handleAttributes={payload => props.handleAttributes(payload)}
              />
            </Modal>
          )}
        </>
      )}
    </Toggle>
  );
};

export default ListItem;
