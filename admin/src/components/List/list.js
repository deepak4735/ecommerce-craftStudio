import React from 'react';
import AddCircle from '@material-ui/icons/AddCircle';

// Import styles
import { ListContainer, ListHeaders, ProductList, HeaderItem } from './styles';

// Import components
import ListItem from './components/listItem';

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
          <HeaderItem className='list__withAddBtn'>
            <AddCircle />
          </HeaderItem>
        )}
      </ListHeaders>
      <ProductList>
        {listItemArray.productTypes.map(listItem => (
          <ListItem data={listItem} />
        ))}
      </ProductList>
    </ListContainer>
  );
};

export default ListComponent;
