import styled from 'styled-components';

const SGames = styled.section`
  :root {
    --progress: ;
  }

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 30vw;
  width: 90%;
  margin: auto;
  padding-top: 60px;

  button {
    width: 125px;
    height: 50px;
    margin: 20px;
    font-size: 20px;
    border-radius: 5px;
  }

  h2,
  h3 {
    margin: 20px;
    font-size: 20px;
  }

  img {
    border: 2px solid black;
    width: 200px;
    height: 200px;
    margin-left: 20px;
  }

  .description {
    margin-left: 20px;
  }

  .BarreDeVie {
    width: 60vw;
    height: 50px;
    border: 2px solid black;
    vertical-align: middle;
    margin-left: 20px;
    font-size: 30px;
    font-family: cursive;
  }

  .PV {
    width: var(--progress);
    height: 51.5px;
    background-color: #f3f3f3;
    padding-top: 5px;
    text-align: center;
    margin-top: -1px;
    margin-left: -1px;
  }
  .Attack {
    margin-top: -20px;
    margin-left: 205px;
  }
`;

export default SGames;
