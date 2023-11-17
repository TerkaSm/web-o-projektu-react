import React from 'react';
import './style.scss';
import { DesktopNavigation } from '../DesktopNavigation';
import { MobileNavigation } from '../MobileNavigation';
import pandaImg from './img/logo_panda.svg'
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

export const Header = () => {
  const [widthViewport, setWidthViewport] = useState(window.innerWidth);

  useEffect(() => {
    const updateWidthViewportu = () => {
      setWidthViewport(window.innerWidth);
    };

    window.addEventListener('resize', updateWidthViewportu);

    return () => {
      window.removeEventListener('resize', updateWidthViewportu);
    };
  }, []);

  return (
    <header className="header">
      <Link to="/"><img className="logo" src={pandaImg} alt="logo" /></Link>
      {widthViewport >= 800 ? <DesktopNavigation /> : <MobileNavigation />}
    </header>
  );
};