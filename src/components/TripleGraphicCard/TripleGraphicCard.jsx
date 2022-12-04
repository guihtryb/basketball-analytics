import PropTypes from 'prop-types';
import './index.css';

import React from 'react';
import TripleGraphicList from '../TripleGraphicList/TripleGraphicList';

export default function TripleGraphicCard({ subject, graphicTripleLists }) {
  return (
    <div className="graphic-card">
      <h2>
        {subject}
      </h2>
      <div className="graphics-container">
        {
          graphicTripleLists.map((list) => (
            <TripleGraphicList
              key={list.graphicName}
              graphicName={list.graphicName}
              leftName={list.leftName}
              leftData={list.leftData}
              middleName={list.middleName}
              middleData={list.middleData}
              rightName={list.rightName}
              rightData={list.rightData}
            />
          ))
        }
      </div>
    </div>
  );
}

TripleGraphicCard.propTypes = {
  subject: PropTypes.string.isRequired,
  graphicTripleLists: PropTypes.arrayOf(PropTypes.shape({
    graphicName: PropTypes.string,
    leftName: PropTypes.string,
    leftData: PropTypes.number,
    rightName: PropTypes.string,
    rightData: PropTypes.number,
  })).isRequired,
};
