import React from 'react';
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import Slide from './components/Slide/Slide';

import './styles/app.css';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Intro />
        <Slide title="Conferência" items={['Leste', 'Oeste']} />
        <Slide title="Time" items={['Atlanta Hawks', 'Golden State Warriors', 'Milwaukee Bucks', 'Philadelfia 76ers']} />
        <section className="team-first-infos-section">
          <h1 className="team-name">Atlanta Hawks</h1>
          <ul className="team-first-infos-list">
            <li>
              <span>Cidade:</span>
              <span>
                <a href="https://www.google.com/maps/place/Atlanta,+GA,+USA/@33.7670199,-84.5298201,11z/data=!4m13!1m7!3m6!1s0x88f5045d6993098d:0x66fede2f990b630b!2sAtlanta,+GA,+USA!3b1!8m2!3d33.748752!4d-84.3876845!3m4!1s0x88f5045d6993098d:0x66fede2f990b630b!8m2!3d33.748752!4d-84.3876845">
                  Atlanta, Georgia
                </a>
              </span>
            </li>
            <li>
              <span>Arena:</span>
              <span>
                <a href="https://www.google.com/maps/place/State+Farm+Arena/@33.7566424,-84.3954565,3a,77.9y,90t/data=!3m8!1e2!3m6!1sAF1QipP2hHnHG5Uwd6mbT--7F_sh7i46R0Qm7d4ly2DU!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipP2hHnHG5Uwd6mbT--7F_sh7i46R0Qm7d4ly2DU%3Dw149-h86-k-no!7i1080!8i620!4m5!3m4!1s0x88f5037f9142496d:0xb060d5dcce275ffb!8m2!3d33.7572891!4d-84.3963244">
                  State Farm Arena
                </a>
              </span>
            </li>
            <li>
              <span>Fundado há:</span>
              <span>76 anos</span>
            </li>
            <li>
              <span>Títulos da NBA:</span>
              <span>1</span>
            </li>
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
