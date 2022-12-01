import React from 'react';
import reactLogo from '../../images/react.svg';

import chartJsLogo from '../../images/chartjs.png';
import './index.css';

export default function ToolsAnimation() {
  return (
    <div className="tools-animation">
      <img
        src={reactLogo}
        alt="logo"
        height="120px"
        className="react-logo"
      />
      <p className="plus">+</p>
      <img
        src={chartJsLogo}
        alt="logo"
        height="120px"
        className="chart-logo"
      />
    </div>
  );
}
