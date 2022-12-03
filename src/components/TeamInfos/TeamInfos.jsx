import PropTypes from 'prop-types';
import React from 'react';

import hawksExampleLogo from '../../images/teams/hawks.png';
import './index.css';

export default function TeamInfos({
  teamName, cityLink, city, arenaLink, arena, years, championchips,
}) {
  return (
    <section className="team-first-infos-section">
      <div className="team-name-and-logo">
        <h1 className="team-name">
          {teamName}
        </h1>
        <img src={hawksExampleLogo} alt="hawks logo" width={50} height={50} />
      </div>
      <ul className="team-first-infos-list">
        <li>
          <span>Cidade:</span>
          <span>
            <a href={cityLink} target="_blank" rel="noreferrer">
              {city}
            </a>
          </span>
        </li>
        <li>
          <span>Arena:</span>
          <span>
            <a href={arenaLink} target="_blank" rel="noreferrer">
              {arena}
            </a>
          </span>
        </li>
        <li>
          <span>Fundado há:</span>
          <span>
            {`${years} anos`}
          </span>
        </li>
        <li>
          <span>Títulos da NBA:</span>
          <span>{championchips}</span>
        </li>
      </ul>
    </section>
  );
}

TeamInfos.propTypes = {
  arena: PropTypes.string.isRequired,
  arenaLink: PropTypes.string.isRequired,
  championchips: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  cityLink: PropTypes.string.isRequired,
  teamName: PropTypes.string.isRequired,
  years: PropTypes.number.isRequired,
};
