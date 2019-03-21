import styled from 'styled-components';

export const HomeContainer = styled.div`
  grid-area: main;
  width: 100%;
  height: 100%;
  background: ${props => props.theme.secondary};
`;
