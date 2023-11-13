import React from 'react';
import './style.scss';

export const Navigation = () => (
  <>
    {/* Mobile-nav */}
    <div className="mobile-nav">
      <input
        className="mobile-nav__checkbox"
        type="checkbox"
        id="mobile-nav-toggle"
      />
      <label className="mobile-nav__button" htmlFor="mobile-nav-toggle">
        <img className="mobile-nav__icon" src="img/icon-nav.svg" alt="navigace" />
      </label>

      <a className="mobile-nav__icon-close" href="index.html">
        <img src="img/icon-close.svg" alt="ikona zavřít" />
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
