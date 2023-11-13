import './style.scss';

export const LocketPage = () => {
  return (
    <main>
      <section className='locket'>
        <div className="locket__flex-title-icon">
          <figcaption className="locket__fig">
            <img className="locket__img" src="img/locket.jpg" alt="Tereza" />
          </figcaption>
          <div className="locket__content">
            <div className='locket__flex--2'>
              <h1 className="locket__title">Tereza Smolová</h1>
              <a className="locket__github-link" href="https://github.com/TerkaSm">
                <img className="locket__github-icon" src="img/icon-github.svg" alt="ikona GitHub" />
              </a>
            </div>
            <p className="locket__text">
              Ahoj jmenuju se Tereza a mojí novou vášní je frontend. Proto jsem se přihlásila na Digitální akademii Web od Czechitas a tenhle web je info-webem o našem závěrečném projektu. Jsem mámou tříletého kluka a tak doufám že náš projekt bude použitelný, užitečný a pomůže rodičům při zvládání náročných dětských situací a emocí.
            </p>
          </div>
        </div>
        <div className="locket__flex">
          <div className="locket__content">
            <h1 className="locket__title">Tygřík Kubík</h1>
            <p className="locket__text">
              Ve hře hlasově ztvárňuji tygříka Kubíka, který dítě provede situací kdy mu spadne věž z kostek. Kubík dítěti ukáže jak se lze v takové situaci zachovat a vyřešit ji. Nejdříve se zastaví, s pomocí dítěte se párkrát nadechne, potom se zamyslí a nabídne možnosti řešení. Výběr je na dítěti. Nakonec si vše projdou ještě jednou.
            </p>
          </div>
          <figcaption className="locket__fig">
            <img className="locket__img-animal" src="img/tygr.svg" alt="Tereza" />
          </figcaption>
        </div>
        <div className="button__wrapp">
          <a className="button button--secondary" href="/">zpět</a>
        </div>
      </section>
    </main>
  );
};
