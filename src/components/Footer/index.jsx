import SFooter from './style';
import Sns from '../Sns';
import Pc from './pc-logo.png';
import Ps4 from './PS4.png';
import Stadia from './stadia.png';
import Switch from './switch.png';
import Xbox from './XboxOne.png';

export default function Footer() {
  return (
    <SFooter>
      <div className="mentionsUl">
        <ul className="playerGames">
          <img src={Pc} alt="logoPc" className="pcLogo" />

          <img src={Ps4} alt="logoPs4" className="" />

          <img src={Stadia} alt="logoStadia" className="Ps4Logo" />

          <img src={Switch} alt="logoSwitch" className="SwitchLogo" />

          <img src={Xbox} alt="logoXbox" className="xboxLogo" />
        </ul>
        <Sns />
      </div>
      <div className="snsCopyright">
        <div className="legalNotice">
          <h3>Mentions légales</h3>
          <p>
            Le site a pour but de laisser intéragir les utilisateurs sur la saga
            Darksiders
          </p>
        </div>
        <p className="copyright">
          © 2022 THQ Nordic AB, Sweden. Darksiders, THQ et leurs logos
          respectifs sont des marques commerciales et/ou des marques déposées de
          THQ Nordic AB. Tous les droits sont réservés. Toutes les autres
          marques, logos et droits dauteur sont la propriété de leurs
          propriétaires respectifs.
        </p>
      </div>
    </SFooter>
  );
}
