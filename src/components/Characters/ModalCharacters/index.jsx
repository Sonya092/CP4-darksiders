import React from 'react';
import PropTypes from 'prop-types';
import SModal from './style';

function ModalCharacters({ closeModalCharacters, description }) {
  return (
    <SModal>
      <div className="charactersModalBackground">
        <div className="charactersModalContainer">
          <div className="titleModal">
            <p>{description.id}</p>
            <button
              className="cross"
              type="button"
              onClick={() => closeModalCharacters(false)}
            >
              &times;
            </button>
          </div>
        </div>
      </div>
    </SModal>
  );
}

ModalCharacters.propTypes = {
  closeModalCharacters: PropTypes.string,
  description: PropTypes.string.isRequired,
};

ModalCharacters.defaultProps = {
  closeModalCharacters: 'X',
};

export default ModalCharacters;
