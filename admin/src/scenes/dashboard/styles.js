import styled from 'styled-components';

export const DashboardContainer = styled.div`
  display: grid;
  grid-template-columns: 23rem 1fr;
  grid-template-areas: 'sidenav main';
  height: 100vh;
  max-height: 100vh;
  overflow-y: scroll;
`;
