import styled from 'styled-components';

const SModal = styled.div`
  .charactersModalBackground {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(9, 10, 17, 0.7);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .titleModal {
    width: 768px;
    height: 432px;
  }

  .titleModal button {
    cursor: pointer;
    font-weight: 1000;
    font-size: 50px;
    color: rgb(166, 188, 206);
  }

  .cross {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .charactersModalContainer .titleModal {
    display: inline-block;
    text-align: center;
    margin-top: auto;
  }

  .titleModal p {
    width: 100%;
    height: 100%;
    z-index: 2;
  }
`;

export default SModal;
