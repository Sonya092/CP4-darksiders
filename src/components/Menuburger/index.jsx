import { elastic as Menu } from 'react-burger-menu';
import SFormMenuBurger from './style';

export default function MenuBurger() {
  return (
    <SFormMenuBurger>
      <div className="burger">
        <Menu isOpen={false}>
          <a id="Accueil" className="navLink" href="/Accueil">
            Accueil
          </a>

          <a id="Personnages" className="navLink" href="/Personnages">
            Personnages
          </a>

          <a id="Jeux" className="navLink" href="/Jeux">
            Jeux
          </a>
        </Menu>
      </div>
    </SFormMenuBurger>
  );
}
