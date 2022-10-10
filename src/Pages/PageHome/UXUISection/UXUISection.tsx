import { classNameModule } from "../../../utils/classNameModule/classNameModule";
import HomeContainer from "../common/HomeContainer/HomeContainer";
import SectionTitle from "../common/SectionTitle/SectionTitle";

import styles from "./UXUISection.module.scss";
const className = classNameModule(styles);

const UXUISection = () => {
  return (
    <div {...className("UXUISection")}>
      <HomeContainer>
        <SectionTitle>Conception UX/UI</SectionTitle>

        <p>
          Le soucis du détail : des petits détails d'UX peuvent causer de
          problèmes conséquents : mauvais wording, comportements inhabituels,
          mauvais placement / mise en avant de l'information.
        </p>

        <p>
          Mon principe est : une interface simple et des interactions logiques
          et bien pensées. L'utilisateur doit trouver ce qu'il cherche sans
          difficulté. Cela implique de savoir qui sont les utilisateurs et ce
          qu'ils cherchent.
        </p>
      </HomeContainer>
    </div>
  );
};

export default UXUISection;

/* Inspirations :

    - https://www.malt.fr/profile/maroussiahumbert?q=ux+ui+designer&as=t&minDailyPrice=500&searchid=634435cdbcb090280a0dc985
    - https://www.marouxia-design.fr/
*/
