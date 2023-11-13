import React from 'react';
import './style.scss';
import { Navigation } from '../Navigation';

export const Header = () => (
  <header className="header">
    <a href="index.html"><img class="logo" src="img/logo_panda.svg" alt="logo"/></a>
    <Navigation />
  </header>
);