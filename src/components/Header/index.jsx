import { NavLink } from 'react-router-dom';
import SHeader from './style';
import logodarksiders from './Darklogo.jpeg';
import MenuBurger from '../Menuburger';

function Header() {
  return (
    <SHeader>
      <MenuBurger />
      <NavLink to="/">
        <img src={logodarksiders} alt="logodarksiders" className="headerLogo" />
      </NavLink>
      <div className="Menu">
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
      </div>
    </SHeader>
  );
}

export default Header;
