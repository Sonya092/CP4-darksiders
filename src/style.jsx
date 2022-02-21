import styled from 'styled-components';
import Darksiders2 from 'Darksiders2.jpg';

const SApp = styled.div`
  background-image: rgb(45, 61, 85);
  background: linear-gradient(
      45deg,
      rgba(45, 61, 85, 1) 0%,
      rgba(45, 61, 85, 0.5060224773503151) 73%,
      rgba(45, 61, 85, 1) 100%
    ),
    url('${Darksiders2}');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  font-family: 'Cinzel', serif;

  @media screen and (max-width: 700px) {
  }
`;

export default SApp;
