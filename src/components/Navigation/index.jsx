import { Link } from "react-router-dom";
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
            <Link className="mobile-nav__link" href="/">Domů</Link>
          </li>
          <li className="mobile-nav__item">
            <Link className="mobile-nav__link" href="/hedvika">Hedvika</Link>
          </li>
          <li className="mobile-nav__item">
            <Link className="mobile-nav__link" href="/tynka">Týnka</Link>
          </li>
          <li className="mobile-nav__item">
            <Link className="mobile-nav__link" href="/terka">Terka</Link>
          </li>
        </ul>
      </nav>
    </div>

    {/* Navigation */}
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__item">
          <Link className="navigation__link" href="/hedvika">Hedvika</Link>
        </li>
        <li className="navigation__item">
          <Link className="navigation__link" href="/tynka">Týnka</Link>
        </li>
        <li className="navigation__item">
          <Link className="navigation__link" href="/terka">Terka</Link>
        </li>
      </ul>
    </nav>
  </>
);
