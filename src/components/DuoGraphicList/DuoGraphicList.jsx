import PropTypes from 'prop-types';
import React from 'react';
import Chart from 'react-google-charts';

export default function DuoGraphicList({
  graphicName,
  leftName,
  leftData,
  rightName,
  rightData,
}) {
  const data = [
    [graphicName, graphicName],
    [leftName, leftData],
    [rightName, rightData],
  ];

  const options = {
    title: graphicName,
    pieHole: 0.4,
    is3D: false,
  };

  return (
    <div className="graphic">
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width="100%"
        height="200px"
      />
    </div>
  );
}

DuoGraphicList.propTypes = {
  graphicName: PropTypes.string.isRequired,
  leftData: PropTypes.number.isRequired,
  leftName: PropTypes.string.isRequired,
  rightData: PropTypes.number.isRequired,
  rightName: PropTypes.string.isRequired,
};
