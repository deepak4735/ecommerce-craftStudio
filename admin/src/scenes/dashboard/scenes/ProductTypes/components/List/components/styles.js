import styled from 'styled-components';

export const ListItemContainer = styled.div`
  width: 100%;
  /* border: 1px solid black; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  height: 5rem;
  cursor: pointer;
  padding-left: 0.5rem;

  :hover {
    background: white;
  }
`;

export const Item = styled.p`
  flex: 1 1 5rem;
  color: ${props => props.theme.paragraphs};
  font-weight: 600;
  text-transform: uppercase;
  font-size: 1.2rem;
  /* max-width: 6rem;
  min-width: 6rem; */
  margin: 0;
`;
