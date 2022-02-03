import styled from 'styled-components';

const SHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;

  ul {
    display: flex;
    width: 80vw;
    justify-content: space-around;

    li {
      list-style: none;
      font-weight: bold;
      color: #f5f5f5;
      font-size: 40px;
    }
    a {
      text-decoration: none;
    }
  }
  img {
    width: 100px;
    border-radius: 50%;
  }
  @media screen and (max-width: 700px) {
    flex-direction: column;
    align-items: center;
    margin: auto;
    ul {
      width: 1rem;
      flex-direction: column;
      align-self: flex-start;
    }
    a li {
      font-size: 20px;
    }
  }
`;

export default SHeader;
