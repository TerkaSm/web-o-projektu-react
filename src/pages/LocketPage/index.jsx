import "./style.scss";
import { useParams } from "react-router-dom";
import { LOCKETS } from "../../lockets";
import gitHubIconSrc from "./img/icon-github.svg";
import { Link } from "react-router-dom";

export const LocketPage = () => {
  const { profileId } = useParams();
  const {
    id,
    imgPerson,
    namePerson,
    gitHubLink,
    textPerson,
    nameAnimal,
    textAnimal,
    altAnimal,
    imgAnimal,
  } = LOCKETS[profileId];

  return (
    <main>
      <section className="locket" key={id}>
        <div className="locket__flex">
          <figcaption className="locket__fig">
            <img className="locket__img" src={imgPerson} alt={namePerson} />
          </figcaption>
          <div className="locket__content">
            <div className="locket__flex-title-icon">
              <h1 className="locket__title">{namePerson}</h1>
              <a className="locket__github-link" href={gitHubLink}>
                <img
                  className="locket__github-icon"
                  src={gitHubIconSrc}
                  alt="ikona GitHub"
                />
              </a>
            </div>
            <p className="locket__text">{textPerson}</p>
          </div>
        </div>
        <div className="locket__flex">
          <div className="locket__content">
            <h1 className="locket__title">{nameAnimal}</h1>
            <p className="locket__text">{textAnimal}</p>
          </div>
          <figcaption className="locket__fig">
            <img
              className="locket__img-animal"
              src={imgAnimal}
              alt={altAnimal}
            />
          </figcaption>
        </div>
        <div className="button__wrapp">
          <Link className="button button--secondary" to="/">
            zpět
          </Link>
        </div>
      </section>
    </main>
  );
};
