import Death from './Death.jpg';
import War from './War2.jpg';
import Fury from './Fury3.jpg';
import Discord from './Discord2.jpg';
import SCharacters from './style';

function Characters() {
  return (
    <SCharacters>
      <div className="death">
        <img
          src={Discord}
          alt="discordCharacters"
          className="discordCharacters"
        />
        <h3>Discord</h3>
      </div>
      <div className="death">
        <img src={War} alt="warCharacters" className="warCharacters" />
        <h3>War</h3>
      </div>
      <div className="death">
        <img src={Fury} alt="furyCharacters" className="furyCharacters" />
        <h3>Fury</h3>
      </div>
      <div className="death">
        <img src={Death} alt="deathCharacters" className="deathCharacters" />
        <h3>Death</h3>
      </div>
    </SCharacters>
  );
}

export default Characters;
