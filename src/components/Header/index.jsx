import React from 'react';
import './style.scss';
import { DesktopNavigation } from '../DesktopNavigation';
import { MobileNavigation } from '../MobileNavigation';
import pandaImg from './img/logo_panda.svg'
import { useState, useEffect } from 'react';

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
      <a href="/"><img className="logo" src={pandaImg} alt="logo" /></a>
      {widthViewport >= 800 ? <DesktopNavigation /> : <MobileNavigation />}
    </header>
  );
};