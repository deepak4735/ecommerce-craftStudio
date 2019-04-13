import styled from 'styled-components';

export const DashboardContainer = styled.div`
  display: grid;
  grid-template-columns: 23rem 1fr;
  grid-template-rows: 10rem 1fr 50px;
  grid-template-areas:
    'sidenav header'
    'sidenav main'
    'sidenav main';
  height: 100vh;
  overflow: hidden;
`;
