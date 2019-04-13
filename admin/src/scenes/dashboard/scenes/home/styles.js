import styled from 'styled-components';

export const HomeContainer = styled.div`
  grid-area: main;
  width: 100%;
  height: 100%;
  background: ${props => props.theme.primary};

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 16rem 35rem 1fr;

  grid-template-areas:
    'quickStatOrders quickStatRev quickStatProfit'
    'lastestOrders lastestOrders revBreakDown'
    'googleAnalytics googleAnalytics googleAnalytics';

  overflow-y: scroll;
`;

export const QuickStatistics = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  align-items: ${props => props.alignItem};
  justify-content: flex-start;
  flex-direction: ${props => props.flexDirection};

  h2 {
    align-self: flex-start;
    color: ${props => props.theme.headers};
    margin: 0;
  }
`;
