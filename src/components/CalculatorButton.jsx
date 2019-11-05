import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  clickHandler: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

const CalculatorButton = ({ clickHandler, name }) => {
  const handleClick = () => {
    clickHandler(name);
  };

  return (
    <div>
      <button type="button" onClick={handleClick}>
        {name}
      </button>
    </div>
  );
};

CalculatorButton.propTypes = propTypes;

export default CalculatorButton;
