import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const propTypes = {
  value: PropTypes.string.isRequired,
};

/**
 * Calculator Display
 * @param {object} props - Props
 * @returns {component} - StyledCalculatorDisplay
 */
const CalculatorDisplay = ({ value }) => {
  return (
    <StyledCalculatorDisplay>
      <h1>{value}</h1>
    </StyledCalculatorDisplay>
  );
};

CalculatorDisplay.propTypes = propTypes;

export default CalculatorDisplay;

const StyledCalculatorDisplay = styled.div`
  display: flex;
  background: #7f816b;
  margin: 0.6rem;
  border-radius: 0.3rem;
  padding: 1rem;
  justify-content: flex-end;
  align-items: center;
`;
