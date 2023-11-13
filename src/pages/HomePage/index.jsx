import './style.scss';
import { Link } from "react-router-dom";
import kockaImg from './img/kocka.svg'
import pandaImg from './img/panda.svg'
import tygrImg from './img/tygr.svg'

export const HomePage = () => {
  return (
    <main>
      <section className="about">
        <h1 className="heading--primary">O našem projektu</h1>
        <p className="about__text">
          Projekt je o tom, jak naučit malé děti zvládat své emoce. Hra je
          zaměřena na děti od 2- 5 let a nastoluje běžné emocionálně vypjaté
          situace. Vybraly jsme tři situace a pro každou situaci jedno zvířátko,
          kterému dítě pomůže danou situaci zvládnout. Hlavní věc je, že se dítě
          musí zastavit třikrát se zhluboka nadechnout vydechnout, zamyslet se,
          jak danou situaci vyřešit, vybrat si jedno řešení a to udělat. Díky
          zvířátku a obrázkům, které si dítě ve hře vybírá se učí jak se
          vypořádat s danou situací. Inspirovaly jsme se v anglické hře Sesame
          Street, která toto téma řeší více propracovaně. 
        </p>
        <a className="button button--primary" href="#">Zahrát si hru</a>

        <div className="about__flex">
          <Link href="/tynka"
            ><img className="about__img" src={kockaImg} alt="kočka"
          /></Link>
          <Link href="/hedvika"
            ><img className="about__img" src={pandaImg} alt="panda"
          /></Link>
          <Link href="/terka"
            ><img className="about__img" src={tygrImg} alt="tygr"
          /></Link>
        </div>
      </section>
    </main>
  );
};
