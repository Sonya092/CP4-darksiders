import SHome from './style';
import darksiders from './title2.png';

function Home() {
  return (
    <SHome>
      <p className="history">
        C`est l`Apocalypse. La fin de la trêve entre les Cieux et l`Enfer,
        nécessaire au développement de l`Humanité, doit être sonnée par la
        rupture des Sept Sceaux. Le Conseil Ardent, groupe d`entités cosmique
        laissé par le Créateur pour maintenir cette paix jusqu`à ce que les
        Humains soient assez forts pour se défendre face aux Cieux et à l`Enfer,
        enverra alors au milieu de la bataille ses quatre agents de toujours :
        les Cavaliers de l`Apocalypse, véritables gardiens de la paix œuvrant
        pour le Conseil et arbitrant le conflit en son nom. Pourtant, seul un
        Cavalier de l`Apocalypse a été envoyé sur Terre : Guerre. Ce dernier, à
        la fois perturbé par l`absence des trois autres Cavaliers et également
        victime d`un blocage inattendu de ses pouvoirs, se fraya tant bien que
        mal un chemin à coups d`épée au travers de la bataille jusqu`à tomber
        sur Abaddon, le général chargé de l`assaut angélique, et il lui demande
        alors des explications quant aux anomalies du déroulement de
        l`Apocalypse. Abaddon, qui n`attendait curieusement pas la présence d`un
        Cavalier, s`en trouve alors distrait du combat, et Straga, colossal
        général des armées infernales, le tue par surprise, en surgissant d`un
        bain de lave avant de l`écraser dans sa main. Uriel, la seconde
        d`Abaddon, croyant que Guerre était à l`origine de l`arrivée prématurée
        de l`Armageddon et surtout de la mort de son chef, jura de le tuer.
        Guerre affronta Straga, réussit à lui crever un œil mais ses pouvoirs
        défaillants lui jouèrent un tour fatal, Straga profitant de l`ouverture
        pour le broyer à son tour. Les Cieux sont ensuite vaincus, et les forces
        de l`Enfer s`établissent sur la Terre, sous le règne du terrifiant
        Destructeur. Un siècle plus tard, Guerre est ramené à la vie par le
        Conseil Ardent et traîné devant ce dernier, accusé d`avoir déclenché
        prématurément l`Apocalypse et mené ainsi la race humaine à sa perte. Au
        terme de son jugement, plutôt que d`être simplement exécuté, Guerre, à
        sa propre demande, se voit accorder le droit de retourner sur Terre,
        afin de partir en croisade vindicative et de traquer les vrais
        coupables, pour laver son honneur. Ses pleins pouvoirs restent cependant
        confisqués. Ayant récupéré son épée, l`Absorbeur de Chaos, et soumis par
        le Conseil à la fusion de son bras métallique au Guetteur, une entité
        fantomatique sadique chargée de « surveiller » Guerre (quitte à le
        torturer pour le forcer à continuer sa mission), ce dernier n`étant plus
        que l`ombre de lui-même, est envoyé dans les ruines de New York, et son
        odyssée peut enfin commencer…
      </p>
      <img src={darksiders} alt="darksidersTitle" className="titleDark" />
    </SHome>
  );
}

export default Home;
