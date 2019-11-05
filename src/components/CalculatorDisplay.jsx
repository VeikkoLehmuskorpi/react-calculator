import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  value: PropTypes.string.isRequired,
};

const CalculatorDisplay = ({ value }) => {
  return (
    <div>
      <h1>{value}</h1>
    </div>
  );
};

CalculatorDisplay.propTypes = propTypes;

export default CalculatorDisplay;
