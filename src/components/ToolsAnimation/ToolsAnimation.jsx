import React from 'react';
import reactLogo from '../../images/react.svg';

import reactGoogleChartLogo from '../../images/react-google-chart.png';
import './index.css';

export default function ToolsAnimation() {
  return (
    <>
      <div className="tools-animation">
        <img
          src={reactLogo}
          alt="reactjs"
          height="120px"
          className="react-logo"
        />
        <p className="plus">+</p>
        <img
          src={reactGoogleChartLogo}
          alt="react google charts"
          height="120px"
          className="chart-logo"
        />
      </div>
      <div className="techs-box">
        <p>ReactJS</p>
        <p>React Google Charts</p>
      </div>
    </>
  );
}
