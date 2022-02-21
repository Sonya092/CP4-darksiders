import styled from 'styled-components';

const SCharacters = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  font-size: large;
  color: #fff;
  font-family: 'Della Respira';
  font-weight: 500;
  font-style: normal;
  clear: both;
  line-height: 1.1;
  text-transform: uppercase;
  position: relative;

  img {
    transform: rotateY(180deg);
    border-radius: 10px;
    height: 300px;
    width: 200px;
    position: relative;
    transform-style: preserve-3d;
    transition: all 0.8s ease;
    align-content: space-between;
    font-weight: bolder;
    bottom: 0;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
  img:hover {
    bottom: 20px;
  }

  h3 {
    display: flex;
    justify-content: center;
    padding-top: 1rem;
  }
  button {
    background-color: transparent;
    border: none;
    margin-top: 30px;
  }

  @media screen and (max-width: 700px) {
    flex-flow: column wrap;
  }
`;

export default SCharacters;
