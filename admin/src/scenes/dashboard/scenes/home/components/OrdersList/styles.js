import styled from 'styled-components';

export const Table = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 21rem;
  max-height: 21rem;
  padding: 0 1rem 0 1rem;
  background: ${props => props.theme.secondary};
  border-radius: 1rem;
`;

export const TableHead = styled.div`
  display: flex;
  justify-content: space-between;

  h4 {
    flex: 0 1 10rem;
    font-size: 1.4rem;
    font-weight: 600;
    color: ${props => props.theme.headers};
    margin: 0;
    margin-top: 0.6rem;
  }
`;

export const TableBody = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
`;

export const TableRow = styled.div`
  width: 100%;

  height: 3rem;
  max-height: 4rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    padding: 0;
    width: 10rem;
    font-size: 1.2rem;
    text-align: start;
    color: ${props => props.status === 'fullyCharged' && 'green'};
  }
`;
