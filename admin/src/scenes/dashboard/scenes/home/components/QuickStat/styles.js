import styled from 'styled-components';

export const Container = styled.div`
  width: 90%;
  height: 50%;
  background: ${props => props.theme.primary};
  border-radius: ${props => props.theme.defaultBorderRadius};
  display: flex;
  flex-direction: column;
  padding-right: 1rem;
  padding-left: 1rem;
  padding-top: 0.5rem;
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
  height: 80%;
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
    margin: 0;
    color: ${props => props.theme.accentOne};
  }
`;
