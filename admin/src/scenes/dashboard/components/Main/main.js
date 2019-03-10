import React from 'react';

// Import styles
import { MainContainer } from './styles';

const Main = props => {
  return <MainContainer>{props.children}</MainContainer>;
};

export default Main;
