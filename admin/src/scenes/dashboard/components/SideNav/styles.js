import styled from 'styled-components';

export const SideNavigation = styled.aside`
  grid-area: sidenav;
  background: ${props => props.theme.primary};
  display: grid;
  grid-template-rows: 10rem 1fr 10%;
  grid-template-areas:
    'top'
    'navElements'
    'bottom';
  align-items: space-between;
  /* justify-content: space-around; */
  /* flex-direction: column; */
`;

export const SideNavigationElement = styled.div`
  width: 100%;
  height: 5rem;
  margin: 2rem 0 2rem 0;
  display: flex;
  justify-content: ${props => props.justifyContent};
  align-items: center;
  color: white;
  cursor: pointer;

  svg {
    flex: 0.75;
    color: ${props => props.theme.paragraphs};
  }

  a {
    color: ${props => props.theme.paragraphs};
    flex: 1;
  }
`;
