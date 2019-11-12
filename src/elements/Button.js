import styled from 'styled-components';

const Button = styled.button`
  font-family: ${props => props.theme.font};
  font-size: 15px;
  background: ${props => props.theme[props.bg]};
  line-height: 48px;
  padding-left: 40px;
  padding-right: 40px;
  margin-top: 40px;
  margin-bottom: 40px;
  border: 1.4px solid #9b35f2;
  border-radius: 30px;
  position: relative;
  outline: none;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
  cursor: pointer;
  text-transform: uppercase;
  position: relative;
  &:hover {
    box-shadow: 0px 20px 20px 0px rgba(157, 157, 157, 0.5);
    background: ${props => props.theme.gradient};
  }
`;

export default Button;
