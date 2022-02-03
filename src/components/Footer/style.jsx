import styled from 'styled-components';

const SFooter = styled.footer`
  display: flex;
  color: white;
  padding: 20px;
  margin-top: 50px;

  .legalNotice {
    width: 60%;
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
    width: 80%;
  }

  .copyright {
    width: 100%;
    text-align: center;
    font-size: 12px;
    margin-top: 40px;
  }

  .playerGames {
    display: flex;
    justify-content: space-between;
    width: 40vw;
    margin: auto;
  }
  .mentionsUl,
  .snsCopyright {
    height: 100%;
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
