import React from 'react';
import appLogo from '../../images/appLogo.png';

import basketballBall from '../../images/basketball-ball.png';
// href="https://icons8.com
import './index.css';

export default function Header() {
  return (
    <header className="header">
      <img src={appLogo} alt="logo" className="logo-web" />
      <img src={basketballBall} alt="logo" className="logo-mobile" height="35px" />
      <h1 className="logo-mobile">Basketball Analytics</h1>
    </header>
  );
}
