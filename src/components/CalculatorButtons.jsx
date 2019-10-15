import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  resetDisplay: PropTypes.func.isRequired,
  calculate: PropTypes.func.isRequired,
};

const CalculatorButtons = ({ resetDisplay, calculate }) => {
  return (
    <div>
      <div>
        <button type="button" value="(">
          (
        </button>
        <button type="button" value=")">
          )
        </button>
        <button type="button" onClick={() => resetDisplay()}>
          AC
        </button>
      </div>

      <div>
        <button type="button" value="0">
          0
        </button>
        <button type="button" value="1">
          1
        </button>
        <button type="button" value="2">
          2
        </button>

        <button type="button" value=".">
          .
        </button>
        <button type="button" value="=" onClick={() => calculate()}>
          =
        </button>
      </div>

      <div>
        <button type="button" value="%">
          %
        </button>
        <button type="button" value="*">
          *
        </button>
        <button type="button" value="-">
          -
        </button>
        <button type="button" value="+">
          +
        </button>
      </div>
    </div>
  );
};

CalculatorButtons.propTypes = propTypes;

export default CalculatorButtons;
