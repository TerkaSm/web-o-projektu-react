import './style.scss';
import { useParams } from 'react-router-dom';

export const LocketPage = ({id, imgPerson, namePerson, gitHubLink, textPerson, nameAnimal, textAnimal, altAnimal, imgAnimal}) => {
  const routeParams = useParams()
  
  return (
    <main>
      <section className='locket' key={id}>
        <div className="locket__flex-title-icon">
          <figcaption className="locket__fig">
            <img className="locket__img" src={imgPerson} alt={namePerson} />
          </figcaption>
          <div className="locket__content">
            <div className='locket__flex--2'>
              <h1 className="locket__title">{namePerson}</h1>
              <a className="locket__github-link" href={gitHubLink}>
                <img className="locket__github-icon" src="img/icon-github.svg" alt="ikona GitHub" />
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
            <img className="locket__img-animal" src={imgAnimal} alt={altAnimal} />
          </figcaption>
        </div>
        <div className="button__wrapp">
          <a className="button button--secondary" href="/">zpět</a>
        </div>
      </section>
    </main>
  );
};
