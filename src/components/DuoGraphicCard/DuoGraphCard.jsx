import PropTypes from 'prop-types';
import './index.css';

import React from 'react';
import GraphicDuoList from '../GraphicDuoList/GraphicDuoList';

export default function DuoGraphicCard({ subject, graphicDuoLists }) {
  return (
    <div>
      <h2>
        {subject}
      </h2>
      {
        graphicDuoLists.map((list) => (
          <GraphicDuoList
            graphicName={list.graphicName}
            leftName={list.leftName}
            leftData={list.leftData}
            rightName={list.rightName}
            rightData={list.rightData}
          />
        ))
      }
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
