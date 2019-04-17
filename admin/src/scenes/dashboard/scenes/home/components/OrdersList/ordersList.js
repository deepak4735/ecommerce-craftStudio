import React from 'react';

// Import components
import { Container } from '../../../../../../components/Container/Container';

// Import styles
import { Table, TableHead, TableBody, TableRow } from './styles';

const OrdersList = props => {
  return (
    <Container placement='lastestOrders' width='95%' height='100%'>
      <Table>
        <TableHead>
          <h4>#</h4>
          <h4>Placed</h4>
          <h4>Payment status</h4>
          <h4>Order status</h4>
          <h4>Total</h4>
        </TableHead>
        <TableBody>
          <TableRow>
            <p>321321</p>
            <p>14/04/2019</p>
            <p status='fullyCharged'>Fully charged</p>
            <p>Unfilled</p>
            <p>5310</p>
          </TableRow>
          <TableRow>
            <p>321321</p>
            <p>14/04/2019</p>
            <p>Fully charged</p>
            <p unfilled>Unfilled</p>
            <p>5310</p>
          </TableRow>
        </TableBody>
      </Table>
    </Container>
  );
};

export default OrdersList;
