import PropTypes from 'prop-types';
import React from 'react';

export default function TripleGraphicList({
  graphicName,
  leftName,
  leftData,
  middleName,
  middleData,
  rightName,
  rightData,
}) {
  return (
    <div className="graphic">
      <h3>{graphicName}</h3>
      <ul>
        <li>
          {`${leftName}: ${leftData}`}
        </li>
        <li>
          {`${middleName}: ${middleData}`}
        </li>
        <li>
          {`${rightName}: ${rightData}`}
        </li>
      </ul>
    </div>
  );
}

TripleGraphicList.propTypes = {
  graphicName: PropTypes.string.isRequired,
  leftData: PropTypes.number.isRequired,
  leftName: PropTypes.string.isRequired,
  middleData: PropTypes.number.isRequired,
  middleName: PropTypes.string.isRequired,
  rightData: PropTypes.number.isRequired,
  rightName: PropTypes.string.isRequired,
};
