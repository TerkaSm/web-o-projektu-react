import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.scss";
import { useState } from "react";

export const MobileNavigation = () => {
  const [isOpenMobileNav, setIsOpenMobileNav] = useState(true);

  const toggleMobileNav = () => {
    setIsOpenMobileNav(!isOpenMobileNav);
  };

  const location = useLocation();

  return (
    <div className="mobile-nav">
      <div
        onClick={toggleMobileNav}
        className="mobile-nav__icon mobile-nav__icon--open"
      ></div>

      {isOpenMobileNav ? null : (
        <nav className="mobile-nav__nav">
          <div
            onClick={toggleMobileNav}
            className="mobile-nav__icon mobile-nav__icon--close"
          ></div>
          <ul className="mobile-nav__list">
            <li className="mobile-nav__item">
              <Link
                onClick={toggleMobileNav}
                className="mobile-nav__link"
                to="/"
              >
                Domů
              </Link>
            </li>
            <li className="mobile-nav__item">
              <Link
                onClick={toggleMobileNav}
                className="mobile-nav__link"
                to="/hedvika"
              >
                Hedvika
              </Link>
            </li>
            <li className="mobile-nav__item">
              <Link
                onClick={toggleMobileNav}
                className="mobile-nav__link"
                to="/tynka"
              >
                Týnka
              </Link>
            </li>
            <li className="mobile-nav__item">
              <Link
                onClick={toggleMobileNav}
                className="mobile-nav__link"
                to="/terka"
              >
                Terka
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};
