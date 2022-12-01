import React from 'react';
import Title from '../Title/Title';
import ToolsAnimation from '../ToolsAnimation/ToolsAnimation';

import './index.css';

export default function Intro() {
  return (
    <section className="intro">
      <Title />
      <ToolsAnimation />
    </section>
  );
}
