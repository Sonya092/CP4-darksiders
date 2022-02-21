import { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import SCharacters from './style';
import ModalCharacters from './ModalCharacters';

function Characters() {
  const [openModalCharacters, setOpenModalCharacters] = useState(false);
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/characters`)
      .then(({ data }) => {
        setCharacters(data);
      })
      .catch(() => {
        setCharacters("Cette page ne contient pas d'image.");
        toast.error('Une erreur est survenue !', {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        });
      });
  }, []);
  return (
    <SCharacters>
      {characters.map((character) => {
        return (
          <div className="Discord">
            <button
              type="button"
              onClick={() => {
                setOpenModalCharacters(true);
              }}
            >
              <img
                src={character.image}
                alt="discordCharacters"
                className="discordCharacters"
              />
            </button>
            <h3>{character.characterName}</h3>
            {openModalCharacters && (
              <ModalCharacters
                closeModalCharacters={setOpenModalCharacters}
                description={character.description}
              />
            )}
          </div>
        );
      })}
    </SCharacters>
  );
}

export default Characters;
