import styled from 'styled-components';

export const DashboardContainer = styled.div`
  display: grid;
  grid-template-columns: 240px 1fr;
  grid-template-rows: 50px 1fr 50px;
  grid-template-areas:
    'header header'
    'sidenav main'
    'sidenav main';
  height: 100vh;
  overflow: hidden;
`;
