import styled from 'styled-components';

export const ListItemContainer = styled.div`
  width: 100%;
  /* border: 1px solid black; */
  display: flex;
  align-items: center;
  margin-top: 1rem;
  height: 5rem;
  cursor: pointer;
  padding-left: 0.5rem;

  :hover {
    background: white;
  }
`;

export const ItemName = styled.p`
  flex: 0 1 30%;
  color: ${props => props.theme.paragraphs};
  font-weight: 600;
  text-transform: uppercase;
  font-size: 1.2rem;
  /* max-width: 6rem;
  min-width: 6rem; */
  margin: 0;
`;

export const ItemValue = styled.p`
  color: ${props => props.theme.paragraphs};
  font-weight: 600;
  text-transform: uppercase;
  font-size: 1.2rem;
  /* max-width: 6rem;
  min-width: 6rem; */
  margin: 0;
  margin-right: 0.5rem;
`;

export const Section = styled.section`
  flex: 0 1 60%;
  display: flex;
`;
