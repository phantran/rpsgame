import styled from 'styled-components';

const H1 = styled.h1`
  font-family: ${props => props.theme.font};
  font-size: 30px;
  color: ${props => props.theme[props.color]};
`;

const H2 = styled.h1`
  font-family: ${props => props.theme.font};
  font-size: 20px;
  color: ${props => props.theme[props.color]};
`;

const H3 = styled.h1`
  font-family: ${props => props.theme.font};
  font-size: 15px;
  color: ${props => props.theme[props.color]};
`;

const H4 = styled.h1`
  font-family: ${props => props.theme.font};
  font-size: 10px;
  color: ${props => props.theme[props.color]};
`;

const H5 = styled.h1`
  font-family: ${props => props.theme.font};
  font-size: 7px;
  color: ${props => props.theme[props.color]};
`;

export { H1, H2, H3, H4, H5 };
