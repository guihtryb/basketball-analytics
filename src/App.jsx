import React from 'react';
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import Slide from './components/Slide/Slide';
import TeamInfos from './components/TeamInfos/TeamInfos';

import './styles/app.css';
import teamExample from './teams';

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
        <section className="dashboard-section">
          <h1>Dashboard</h1>
          <h2>Temporada 22/23</h2>
          <div className="graphic-card">
            <h2>Pontuação</h2>
            <div className="graphics-container">
              <div className="graphic">
                <h3>Geral</h3>
                <ul>
                  <li>Marcados: 29</li>
                  <li>Sofridos: 29</li>
                </ul>
              </div>
              <div className="graphic">
                <h3>Pontos Marcados</h3>
                <ul>
                  <li>Em casa: 29</li>
                  <li>Fora: 29</li>
                </ul>
              </div>
              <div className="graphic">
                <h3>Pontos Sofridos</h3>
                <ul>
                  <li>Em casa: 29</li>
                  <li>Fora: 29</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="graphic-card">
            <h2>Partidas</h2>
            <h3>Geral</h3>
            <ul>
              <li>Vitórias: 29</li>
              <li>Derrotas: 29</li>
            </ul>
            <h3>Vitórias</h3>
            <ul>
              <li>Em casa: 29</li>
              <li>Fora: 29</li>
            </ul>
            <h3>Derrotas</h3>
            <ul>
              <li>Em casa: 29</li>
              <li>Fora: 29</li>
            </ul>
          </div>
          <div>
            <h2>Defesa</h2>
            <h3>Rebotes Defensivos/Bloqueios/Roubadas</h3>
            <ul>
              <li>Rebotes defensivos: 29</li>
              <li>Bloqueios: 29</li>
              <li>Roubadas: 29</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
