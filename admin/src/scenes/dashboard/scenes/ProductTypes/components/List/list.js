import React from 'react';
import AddCircle from '@material-ui/icons/AddCircle';

// Import styles
import { ListContainer, ListHeaders, ProductList, HeaderItem } from './styles';

// Import components
import ListItem from './components/listItem';
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
                    <div
                      style={{
                        width: '20rem',
                        height: '20rem',
                        background: 'black'
                      }}
                    >
                      <p>Hello</p>
                    </div>
                  </Modal>
                )}
              </>
            )}
          </Toggle>
        )}
      </ListHeaders>
      <ProductList>
        <ListItem addBtn />
        <ListItem addBtn />
        <ListItem addBtn />
        <ListItem addBtn />
      </ProductList>
    </ListContainer>
  );
};

export default ListComponent;
