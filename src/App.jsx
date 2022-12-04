import React from 'react';
import Dashboard from './components/Dashboard/Dashboard';
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import Slide from './components/Slide/Slide';
import TeamInfos from './components/TeamInfos/TeamInfos';

import './styles/app.css';
import { teamExample } from './teams';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Intro />
        <Slide
          title="Conferência"
          items={['Leste', 'Oeste']}
        />
        <Slide
          title="Time"
          items={['Atlanta Hawks', 'Golden State Warriors', 'Milwaukee Bucks', 'Philadelfia 76ers']}
        />
        <TeamInfos
          arena={teamExample.arena}
          arenaLink={teamExample.arenaLink}
          championchips={teamExample.championschips}
          city={teamExample.city}
          cityLink={teamExample.cityLink}
          teamName={teamExample.name}
          years={teamExample.years}
        />
        <Dashboard />
      </main>
    </div>
  );
}

export default App;
