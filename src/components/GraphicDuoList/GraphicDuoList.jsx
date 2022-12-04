import PropTypes from 'prop-types';
import React from 'react';

export default function GraphicDuoList({
  graphicName,
  leftName,
  leftData,
  rightName,
  rightData,
}) {
  return (
    <>
      <h3>{graphicName}</h3>
      <ul>
        <li>
          {`${leftName}: ${leftData}`}
        </li>
        <li>
          {`${rightName}: ${rightData}`}
        </li>
      </ul>
    </>
  );
}

GraphicDuoList.propTypes = {
  graphicName: PropTypes.string.isRequired,
  leftData: PropTypes.number.isRequired,
  leftName: PropTypes.string.isRequired,
  rightData: PropTypes.number.isRequired,
  rightName: PropTypes.string.isRequired,
};
