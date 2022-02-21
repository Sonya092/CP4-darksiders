import { useEffect, useState } from 'react';
import SGames from './style';

export default function Games() {
  const [Pv, setPv] = useState(9999);
  const [PvMax] = useState(9999);

  useEffect(() => {
    const width = getComputedStyle(document.documentElement).getPropertyValue(
      '--progress'
    );
    console.log(width);
  });

  function message() {
    if (Pv <= 10) {
      // eslint-disable-next-line no-alert
      alert('You Win!');
      document.documentElement.style.setProperty('--progress', `0%`);
      setPv(0);
    }
  }

  function calculHit() {
    if (Pv >= 11) {
      return Math.round(((PvMax - (PvMax - Pv)) * 100) / PvMax);
    }
    return 0;
  }

  function attackClick() {
    if (Pv > 0) {
      const D20 = Math.floor(Math.random() * (20 - 1)) + 1;
      const attack = 20;
      setPv(Pv - Math.round(D20 * attack));
      document.documentElement.style.setProperty(
        '--progress',
        `${calculHit()}%`
      );
      message();
    } else {
      message();
    }
  }

  return (
    <SGames>
      <p className="BarreDeVie">
        <p className="PV">
          {Pv}/{PvMax}
        </p>
      </p>
      <button
        type="button"
        className="AttackB"
        onClick={attackClick}
        value="Attack"
      >
        Attack
      </button>
    </SGames>
  );
}
