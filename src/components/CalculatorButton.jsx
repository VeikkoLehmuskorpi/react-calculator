import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const propTypes = {
  clickHandler: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

/**
 * Calculator Button
 * @param {object} props - Props
 * @returns {component} - StyledButton
 */
const CalculatorButton = ({ clickHandler, name }) => {
  /**
   * Handle click
   * @returns {void}
   */
  const handleClick = () => {
    clickHandler(name);
  };

  return (
    <StyledButton type="button" onClick={handleClick}>
      {name}
    </StyledButton>
  );
};

CalculatorButton.propTypes = propTypes;

export default CalculatorButton;

const StyledButton = styled.button`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  background: #dfd1b6;
  border-radius: 0.3rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 1.75rem;
  margin: 0.6rem;
  border: none;
  cursor: pointer;
  padding: 0.5rem 1rem 1rem 1rem;
`;
