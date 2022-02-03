import styled from 'styled-components';

const SComments = styled.section`
  @media only screen and (max-width: 926px) {
    display: flex;
    flex-flow: row wrap;
    color: white;
    padding: 20px;
    margin-top: 50px;
    height: 22%;
    display: flex;
    flex-direction: column;
    margin: 50px 0 -50px 0;
  }
  .commentSection {
    margin: auto;
    width: 90vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    ul {
      width: 90%;
    }
  }
  .writeComment {
    display: flex;
    flex-direction: column;
    color: white;
    width: 90%;
  }
  .comment {
    display: flex;
    flex-direction: row;
    margin-top: 20px;
    box-shadow: 0px 0px 10px -4px rgba(0, 0, 0, 0.7);
  }
  .userComment {
    width: 90%;
  }
  .answerComment {
    width: 95%;
    margin-left: 5%;
    border: 1.5px solid #fff;
  }
  .avatarContainer {
    width: 100px;
    height: 100px;
    margin: 10px 10px;
  }
  .avatars {
    margin: auto;
    width: 75px;
    height: 75px;
    background-color: #fff;
    border-radius: 50%;
  }
  .infoContainer {
    display: flex;
    flex-direction: column;
    width: 90%;
  }
  .dateContainer {
    display: flex;
    flex-direction: row;
  }
  .nameDisplay {
    margin: 10px 0;
    font-size: 18px;
    font-weight: bold;
    color: #ffff;
  }
  .dateDisplay {
    font-size: 14px;
    font-weight: lighter;
    color: #ad45b1;
  }
  .messageDisplay {
    margin: 10px 0;
    font-size: 20px;
    line-height: 20px;
    color: #ffff;
    width: 10px;
  }
  .messageInput {
    border: 1px solid black;
    height: 5rem;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(207, 200, 206, 0.35) 0px -2px 6px 0px inset;
    background-color: transparent;
    color: #ad45b1;
    font-size: 22px;
    margin: 5px 0 15px 0;
  }
  h5 {
    color: #fff;
    font-size: 22px;
    margin: 15px 0;
  }
  .inputTitle {
    color: #fff;
    font-size: large;
    width: 10px;
  }
  .sendBtn {
    width: 150px;
    height: auto;
    font-size: 16px;
    padding: 5px 10px;
    border: 2px solid #fff;
    background-color: transparent;
    color: #fff;
    cursor: pointer;
  }
  .sendBtn:hover {
    background-color: #fff;
    color: #011337;
  }
  .btnDiv {
    margin: 20px 0;
    display: flex;
    justify-content: center;
  }
`;

export default SComments;
