import { NavLink } from 'react-router-dom';
import SHeader from './style';
import logodarksiders from './Darklogo.jpeg';

function Header() {
  return (
    <SHeader>
      <NavLink to="/">
        <img src={logodarksiders} alt="logodarksiders" className="headerLogo" />
      </NavLink>
      <ul>
        <NavLink to="/Accueil">
          <li>Accueil</li>
        </NavLink>
        <NavLink to="/Personnages">
          <li>Personnages</li>
        </NavLink>
        <NavLink to="/Jeux">
          <li>Jeux</li>
        </NavLink>
      </ul>
    </SHeader>
  );
}

export default Header;
