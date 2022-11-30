import React from 'react';
import reactLogo from './images/logo.svg';
import appLogo from './images/appLogo.png';
import chartJsLogo from './images/chartjs-logo.svg';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <img src={appLogo} alt="logo" className="logo-web" />
        <h1 className="logo-mobile">Basketball Analytics</h1>
      </header>
      <main>
        <h1>
          Estatísticas da mais recente temporada da NBA
        </h1>
        <img src={reactLogo} alt="logo" height="120px" className="App-logo" />
        <span>+</span>
        <img src={chartJsLogo} alt="logo" height="120px" />
        <section>
          <h2>Conferência</h2>
          <button type="button">&lt; Previous</button>
          <button type="button">Next &gt;</button>
        </section>
        <section>
          <h2>Times</h2>
          <button type="button">&lt; Previous</button>
          <button type="button">Next &gt;</button>
        </section>
        <section>
          <h1>Atlanta Hawks (logo)</h1>
          <ul>
            <li>Cidade: Atlanta, Georgia</li>
            <li>Arena: State Farm Arena</li>
            <li>Fundado há: 76 anos</li>
            <li>Títulos da NBA: 1</li>
          </ul>
        </section>
        <section>
          <h1>Dashboard</h1>
          <div>
            <h2>Pontuação</h2>
            <h3>Geral</h3>
            <ul>
              <li>Marcados: 29 pts</li>
              <li>Sofridos: 29 pts</li>
            </ul>
            <h3>Pontos Marcados</h3>
            <ul>
              <li>Em casa: 29 pts</li>
              <li>Fora: 29 pts</li>
            </ul>
            <h3>Pontos Sofridos</h3>
            <ul>
              <li>Em casa: 29 pts</li>
              <li>Fora: 29 pts</li>
            </ul>
          </div>
          <div>
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