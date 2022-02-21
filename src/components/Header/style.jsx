import styled from 'styled-components';

const SHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  height: 40%;
  width: auto;
  box-shadow: rgba(45, 61, 85, 1) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  background: #a90000;

  ul {
    display: flex;
    width: 80%;
    justify-content: space-around;

    li {
      list-style: none;
      font-weight: bold;
      color: #373a47;
      font-size: 30px;
    }
    a {
      text-decoration: none;
    }
  }
  img {
    width: 60px;
    border-radius: 50%;
  }
  .Menu {
    width: 70%;
    border: solid 2px red;
  }

  @media screen and (max-width: 700px) {
    .Menu {
      display: none;
    }
  }
`;

export default SHeader;
