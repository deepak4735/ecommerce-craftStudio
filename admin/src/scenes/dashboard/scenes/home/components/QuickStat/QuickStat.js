import React from 'react';

// Import styles
import {
  Container,
  Header,
  Statistic,
  ResultContainer,
  ChangeContainer
} from './styles';

const QuickStat = props => {
  const { title, statistics, changeInProcent, index } = props;
  return (
    <Container>
      <Header>
        <p>{title}</p>
      </Header>
      <Statistic>
        {index === 0 ? (
          <>
            <ResultContainer>
              <p>{statistics}</p>
              <p>{title.toLowerCase()}</p>
            </ResultContainer>
            <ChangeContainer>
              <p>{changeInProcent}%</p>
              <p>more than last month</p>
            </ChangeContainer>
          </>
        ) : (
          <>
            <ResultContainer>
              <p>DKK</p>
              <p>{statistics}</p>
            </ResultContainer>
            <ChangeContainer>
              <p>{changeInProcent}%</p>
              <p>more than last month</p>
            </ChangeContainer>
          </>
        )}
      </Statistic>
    </Container>
  );
};

export default QuickStat;
