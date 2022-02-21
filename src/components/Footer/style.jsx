import styled from 'styled-components';

const SFooter = styled.footer`
  display: flex;
  color: white;
  padding: 20px;
  margin-top: 50px;
  height: 30%;
  box-shadow: rgba(45, 61, 85, 1) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  background: #a90000;

  .legalNotice {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }

  .legalNotice h3 {
    font-size: 18px;
    font-weight: 600;
  }

  .legalNotice p {
    text-align: center;
    font-size: 14px;
    width: 40%;
  }

  .copyright {
    text-align: center;
    font-size: 12px;
    margin-top: 10px;
  }

  .playerGames {
    display: flex;
    justify-content: space-between;
    width: 40vw;
    margin: auto;
  }
  .mentionsUl,
  .snsCopyright {
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 700px) {
    flex-direction: column;
    .snsCopyright p {
      margin-top: 5px;
    }
    .footerLinks,
    .legalNotice {
      width: 100%;
    }
    .playerGames {
      flex-wrap: wrap;
      padding: 0.6rem;
      width: 80vw;
      img {
        margin: 0.5rem;
      }
    }
  }
`;

export default SFooter;
