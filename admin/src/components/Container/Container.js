import styled from 'styled-components';

export const Container = styled.div`
  grid-area: ${props => props.placement};
  display: flex;
  flex-direction: ${props => props.flexDirection};
  align-items: ${props => props.alignmentAlign};
  justify-content: ${props => props.alignmentJustify};
  width: ${props => props.width};
  height: ${props => props.height};
  margin: ${props => props.margin};

  h2 {
    color: ${props => props.theme.headers};
    font-size: ${props => props.fontSize};
  }
`;
