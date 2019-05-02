import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

// Import components
import { Container } from '../../../../components/Container/Container';
import QuickStat from './components/QuickStat/quickStat';
import OrdersList from './components/OrdersList/ordersList';

// Import styles
import { HomeContainer, QuickStatistics } from './styles';

const Home = () => {
  return (
    <HomeContainer>
      <Container
        placement='quickStatOrders'
        fontSize='1.8rem'
        alignmentAlign='space-between'
      >
        <QuickStatistics flexDirection='column' alignItem='flex-start'>
          <h2>Overview of April</h2>
          <QuickStat
            title='Orders'
            statistics={140}
            changeInProcent={5.64}
            index={0}
          />
        </QuickStatistics>
      </Container>
      <Container placement='quickStatRev'>
        <QuickStatistics alignItem='flex-start' flexDirection='column'>
          <h2 style={{ visibility: 'hidden' }}>Overview of April</h2>
          <QuickStat
            title='Revenue'
            statistics={65524.0}
            changeInProcent={10.12}
            index={1}
          />
        </QuickStatistics>
      </Container>
      <Container placement='quickStatProfit'>
        <QuickStatistics alignItem='flex-start' flexDirection='column'>
          <h2 style={{ visibility: 'hidden' }}>Overview of April</h2>
          <QuickStat
            title='Profit'
            statistics={15524.0}
            changeInProcent={5.64}
            index={1}
          />
        </QuickStatistics>
      </Container>
      <Container
        placement='lastestOrders'
        flexDirection='column'
        fontSize='1.8rem'
      >
        <h2 style={{ margin: '0' }}>Lastest orders</h2>
        <OrdersList />
      </Container>
      <Container placement='revBreakDown'>
        <h2>Rev break down</h2>
      </Container>
      <Container placement='googleAnalytics'>
        <p>Google statistics</p>
      </Container>
    </HomeContainer>
  );
};

export default Home;
