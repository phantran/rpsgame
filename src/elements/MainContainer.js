import styled from 'styled-components';
import { device } from '../constants';

const MainContainer = styled.div`
  display: grid;

  @media ${device.tablet} {
    grid-template-columns: auto;
    grid-template-rows: auto auto auto auto auto;
  }

  @media ${device.laptop} {
    grid-template-columns: 25% 50% 25%;
  }

  @media ${device.desktop} {
    grid-template-columns: 25% 50% 25%;
  }
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 15px;
  background-color: white;
`;

export default MainContainer;
