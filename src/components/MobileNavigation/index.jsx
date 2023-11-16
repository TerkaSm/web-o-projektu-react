import React from 'react';
import { Link } from "react-router-dom";
import './style.scss';
import iconClose from './img/icon-close.svg'
import iconNav from './img/icon-nav.svg'
import { useState } from "react";

export const MobileNavigation = () => {
    const [isOpenMobileNav, setIsOpenMobileNav] = useState(false)

    const toggleMobileNav = () => {
        setIsOpenMobileNav(!isOpenMobileNav)
    }

  return(
    <div className="mobile-nav">
      
        <img onClick={toggleMobileNav} src={iconNav} alt="ikona hamburger menu" />

        <nav className="mobile-nav__nav">
        <a className="mobile-nav__icon-close" to="/">
            <img src={iconClose} alt="ikona zavřít" />
        </a>
        <ul className="mobile-nav__list">
            <li className="mobile-nav__item">
            <Link className="mobile-nav__link" to="/">Domů</Link>
            </li>
            <li className="mobile-nav__item">
            <Link className="mobile-nav__link" to="/hedvika">Hedvika</Link>
            </li>
            <li className="mobile-nav__item">
            <Link className="mobile-nav__link" to="/tynka">Týnka</Link>
            </li>
            <li className="mobile-nav__item">
            <Link className="mobile-nav__link" to="/terka">Terka</Link>
            </li>
        </ul>
        </nav>
    </div>
  )
};