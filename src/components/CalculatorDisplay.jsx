import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  firstDisplayValue: PropTypes.number.isRequired,
  operation: PropTypes.string,
  secondDisplayValue: PropTypes.number,
};

const CalculatorDisplay = ({
  firstDisplayValue,
  operation,
  secondDisplayValue,
}) => {
  return (
    <div>
      <h1>
        {firstDisplayValue}
        {operation && operation}
        {operation && secondDisplayValue && secondDisplayValue}
      </h1>
    </div>
  );
};

CalculatorDisplay.propTypes = propTypes;

export default CalculatorDisplay;
