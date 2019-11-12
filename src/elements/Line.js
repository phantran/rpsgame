import styled from 'styled-components';

const Line = styled.hr`
  color: ${props => props.theme[props.bg]};
  background: ${props => props.theme[props.bg]};
  border-radius: 10px;
  border: none;
  height: ${props => props.hg};
  padding: ${props => props.pd};
  margin: ${props => props.mg};
`;

export default Line;
