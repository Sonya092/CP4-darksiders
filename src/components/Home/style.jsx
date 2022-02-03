import styled from 'styled-components';

const SHome = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 80%;
  height: 80%;
  color: #f5f5f5f5;
  margin: auto;
  word-wrap: break-word;
  .history {
    font-size: 20px;
    display: flex;
    align-items: center;
    line-height: 30px;
  }
  img {
    padding-top: 2rem;
    width: 50%;
    border-radius: 5vw;
    filter: drop-shadow(16px 16px 10px black);
  }
  @media screen and (max-width: 700px) {
    .history {
      font-size: 16px;
    }
  }
`;

export default SHome;
