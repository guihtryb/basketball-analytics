import React from 'react';
import PropTypes from 'prop-types';

import './index.css';
import previous from '../../images/previous.svg';
import next from '../../images/next.svg';

const teams = {
  Atlanta: '#c00',
  Golden: '#00f',
  Milwaukee: '#009f00',
  Philadelfia: '#000fff',
};

export default function Slide({ title, items }) {
  const [slideIndex, setSlideIndex] = React.useState(0);
  const [backgroundColor, setBackgroundColor] = React.useState('#000');

  const handleNext = () => (
    slideIndex === items.length - 1 ? setSlideIndex(0) : setSlideIndex(slideIndex + 1)
  );

  const handlePrevious = () => (
    slideIndex === 0 ? setSlideIndex(items.length - 1) : setSlideIndex(slideIndex - 1)
  );

  React.useEffect(() => {
    if (title === 'Time') {
      if (teams[items[slideIndex].split(' ')[0]]) {
        setBackgroundColor(teams[items[slideIndex].split(' ')[0]]);
      }
    }
  }, [slideIndex]);

  return (
    <section className="slide-section" style={{ background: `linear-gradient(${backgroundColor}, #000)` }}>
      <h2 className="subtitle">{title}</h2>
      <div className="slide-container">
        <button className="slide-btn" type="button" onClick={handlePrevious}>
          <img className="previous" src={previous} alt="previous" width={36} />
        </button>
        <ul className="slide">
          {
            items.map((item, index) => (
              <li key={item} className={index === slideIndex ? 'active' : ''}>{item}</li>
            ))
          }
        </ul>
        <button className="slide-btn" type="button" onClick={handleNext}>
          <img className="next" src={next} alt="next" width={36} />
        </button>
      </div>
    </section>
  );
}

Slide.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
};
