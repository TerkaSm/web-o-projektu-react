import React from 'react';
import './style.scss';
import iconClose from './img/icon-close.svg'
import iconNav from './img/icon-nav.svg'

export const Navigation = () => (
  <>
    {/* Mobile-nav */}
    <div className="mobile-nav">
    

      <a className="mobile-nav__icon-close" href="index.html">
        <img src={iconClose} alt="ikona zavřít" />
      </a>

      <a className="mobile-nav__icon-close" href="index.html">
        <img src={iconNav} alt="ikona zavřít" />
      </a>

      <nav className="mobile-nav__nav">
        <ul className="mobile-nav__list">
          <li className="mobile-nav__item">
            <a className="mobile-nav__link" href="index.html">Domů</a>
          </li>
          <li className="mobile-nav__item">
            <a className="mobile-nav__link" href="hedvika.html">Hedvika</a>
          </li>
          <li className="mobile-nav__item">
            <a className="mobile-nav__link" href="tynka.html">Týnka</a>
          </li>
          <li className="mobile-nav__item">
            <a className="mobile-nav__link" href="terka.html">Terka</a>
          </li>
        </ul>
      </nav>
    </div>

    {/* Navigation */}
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__item">
          <a className="navigation__link" href="hedvika.html">Hedvika</a>
        </li>
        <li className="navigation__item">
          <a className="navigation__link" href="tynka.html">Týnka</a>
        </li>
        <li className="navigation__item">
          <a className="navigation__link" href="terka.html">Terka</a>
        </li>
      </ul>
    </nav>
  </>
);
