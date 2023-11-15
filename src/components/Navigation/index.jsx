import { Link } from "react-router-dom";
import React from 'react';
import './style.scss';
import iconClose from './img/icon-close.svg'
import iconNav from './img/icon-nav.svg'
import { useState } from "react";

export const Navigation = () => {
  const [mobileNav, setMobileNav] = useState(true)

  const handleClick = () => {
    setMobileNav(!mobileNav 
      ? null 
      : (
        <div className="mobile-nav">
      
          <img onClick={handleClick} src={iconNav} alt="ikona hamburger menu" />
    
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
      ))
  }

  return(
    <>
      {/* <div className="mobile-nav">
      
        <img onClick={handleClick} src={iconNav} alt="ikona hamburger menu" />
  
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
      </div> */}
  
      {/* Navigation */}
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
    </>
  )
};
