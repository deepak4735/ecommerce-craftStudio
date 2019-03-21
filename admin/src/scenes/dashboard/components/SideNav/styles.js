import styled from 'styled-components';

export const SideNavigation = styled.aside`
  grid-area: sidenav;
  background: ${props => props.theme.secondary};
  display: flex;
  /* justify-content: space-around; */
  flex-direction: column;
`;

export const SideNavigationElement = styled.div`
  width: 100%;
  height: 5rem;
  margin: 2rem 0 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  cursor: pointer;

  svg {
    flex: 0.75;
    /* color: ${props => props.theme.darkAccent}; */
    color: white;
  }

  a {
    /* color: ${props => props.theme.darkAccent}; */
    color: white;
    flex: 1;
  }
`;
