import React from 'react';
import { withRouter } from 'react-router';

// Import styles
import { ListItemContainer, Item } from './styles';

const ListItem = props => {
  console.log(props);
  return (
    <ListItemContainer
      key={props.data.id}
      id={props.data.id}
      onClick={e => props.history.push(`/product-types/edit/${props.data.id}`)}
    >
      <Item id={props.data.id}>{props.data.name}</Item>
      <Item id={props.data.id}>
        {props.data.hasVariants === true ? <> Yes </> : <> No </>}
      </Item>
      <Item id={props.data.id}>
        {props.data.shippingRequired === true ? <>Yes</> : <> No </>}
      </Item>
    </ListItemContainer>
  );
};

export default withRouter(ListItem);
