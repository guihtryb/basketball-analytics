import React from 'react';
import { teamStaticsDefenseListExample, teamStaticsMatchesListExample, teamStaticsPointsListExample } from '../../teams';
import DuoGraphicCard from '../DuoGraphicCard/DuoGraphicCard';
import TripleGraphicCard from '../TripleGraphicCard/TripleGraphicCard';

import './index.css';

export default function Dashboard() {
  return (
    <section className="dashboard-section">
      <h1>Dashboard</h1>
      <h2>Temporada 22/23</h2>
      <DuoGraphicCard
        subject="Pontuação"
        graphicDuoLists={teamStaticsPointsListExample}
      />
      <DuoGraphicCard
        subject="Partidas"
        graphicDuoLists={teamStaticsMatchesListExample}
      />
      <TripleGraphicCard
        subject="Defesa"
        graphicTripleLists={teamStaticsDefenseListExample}
      />
    </section>

  );
}
