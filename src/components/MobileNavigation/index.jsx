import React from 'react';
import { Link } from "react-router-dom";
import './style.scss';
import { useState } from "react";

export const MobileNavigation = () => {
    const [isOpenMobileNav, setIsOpenMobileNav] = useState(false)

    const toggleMobileNav = () => {
        setIsOpenMobileNav(!isOpenMobileNav)
    }

  return(
    <div className="mobile-nav">

        <div
            onClick={toggleMobileNav}
            className={`mobile-nav__icon ${
                isOpenMobileNav ? 'mobile-nav__icon--close' : 'mobile-nav__icon--open'
            }`}>
        </div>

        {isOpenMobileNav 
        ? null
        :   <nav className="mobile-nav__nav">
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
        }
    </div>
  )
};