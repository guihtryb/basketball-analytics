import React from 'react';
import PropTypes from 'prop-types';

import DuoGraphicList from '../DuoGraphicList/DuoGraphicList';

export default function DuoGraphicCard({ subject, graphicDuoLists }) {
  return (
    <div className="graphic-card">
      <h2>
        {subject}
      </h2>
      <div className="graphics-container">
        {
          graphicDuoLists.map((list) => (
            <DuoGraphicList
              key={list.graphicName}
              graphicName={list.graphicName}
              leftName={list.leftName}
              leftData={list.leftData}
              rightName={list.rightName}
              rightData={list.rightData}
            />
          ))
        }
      </div>
    </div>
  );
}

DuoGraphicCard.propTypes = {
  subject: PropTypes.string.isRequired,
  graphicDuoLists: PropTypes.arrayOf(PropTypes.shape({
    graphicName: PropTypes.string,
    leftName: PropTypes.string,
    leftData: PropTypes.number,
    rightName: PropTypes.string,
    rightData: PropTypes.number,
  })).isRequired,
};
