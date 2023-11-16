import { Link } from "react-router-dom";
import React from 'react';
import './style.scss';

export const DesktopNavigation = () => {

  return(
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__item">
          <Link className="navigation__link" to="/hedvika">Hedvika</Link>
        </li>
        <li className="navigation__item">
          <Link className="navigation__link" to="/tynka">Týnka</Link>
        </li>
        <li className="navigation__item">
          <Link className="navigation__link" to="/terka">Terka</Link>
        </li>
      </ul>
    </nav>
  )
};
