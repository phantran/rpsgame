import styled from 'styled-components';

const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${props => props.direction};
  text-align: ${props => props.align};
  justify-content: center;
`;

export default FlexContainer;
