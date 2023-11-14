import React from 'react';
import './style.scss';
import { Navigation } from '../Navigation';
import pandaImg from './img/logo_panda.svg'

export const Header = () => (
  <header className="header">
    <a href="index.html"><img className="logo" src={pandaImg} alt="logo"/></a>
    <Navigation />
  </header>
);