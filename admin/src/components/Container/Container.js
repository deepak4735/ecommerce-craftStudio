import styled from 'styled-components';

export const Container = styled.div`
  grid-area: ${props => props.placement};
  display: flex;
  flex-direction: ${props => props.flexDirection};
  align-items: ${props => props.alignmentAlign};
  justify-content: ${props => props.alignmentJustify};
`;
