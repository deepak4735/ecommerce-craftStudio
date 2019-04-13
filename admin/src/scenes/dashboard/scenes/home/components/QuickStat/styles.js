import styled from 'styled-components';

export const Container = styled.div`
  width: 90%;
  height: 70%;
  background: ${props => props.theme.secondary};
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  padding-right: 2rem;
  padding-left: 2rem;
  padding-top: 1.5rem;
`;

export const Header = styled.div`
  p {
    margin: 0;
    color: ${props => props.theme.paragraphs};
  }
`;

export const Statistic = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const ResultContainer = styled.div`
  display: flex;
  width: 60%;
  p {
    color: ${props => props.theme.headers};
  }

  p:nth-child(2) {
    padding-left: 1rem;
  }
`;

export const ChangeContainer = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  p {
    color: ${props => props.theme.accentOne};
  }

  p:nth-child(2) {
    color: ${props => props.theme.paragraphs}
    font-size: 1.1rem;
  }
`;
