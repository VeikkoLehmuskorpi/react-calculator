import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CalculatorButton from './CalculatorButton';

const propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

const CalculatorButtonPanel = ({ clickHandler }) => {
  const handleClick = buttonName => {
    clickHandler(buttonName);
  };

  return (
    <StyledCalculatorButtonPanel>
      <CalculatorButtonRow>
        <CalculatorButton name="CE" clickHandler={handleClick} />
        <CalculatorButton name="+" clickHandler={handleClick} />
        <CalculatorButton name="-" clickHandler={handleClick} />
        <CalculatorButton name="%" clickHandler={handleClick} />
      </CalculatorButtonRow>

      <CalculatorButtonRow>
        <CalculatorButton name="7" clickHandler={handleClick} />
        <CalculatorButton name="8" clickHandler={handleClick} />
        <CalculatorButton name="9" clickHandler={handleClick} />
        <CalculatorButton name="÷" clickHandler={handleClick} />
      </CalculatorButtonRow>

      <CalculatorButtonRow>
        <CalculatorButton name="4" clickHandler={handleClick} />
        <CalculatorButton name="5" clickHandler={handleClick} />
        <CalculatorButton name="6" clickHandler={handleClick} />
        <CalculatorButton name="x" clickHandler={handleClick} />
      </CalculatorButtonRow>

      <CalculatorButtonRow>
        <CalculatorButton name="1" clickHandler={handleClick} />
        <CalculatorButton name="2" clickHandler={handleClick} />
        <CalculatorButton name="3" clickHandler={handleClick} />
        <CalculatorButton name="." clickHandler={handleClick} />
      </CalculatorButtonRow>

      <CalculatorButtonRow>
        <CalculatorButton name="0" clickHandler={handleClick} />
        <CalculatorButton name="=" clickHandler={handleClick} />
      </CalculatorButtonRow>
    </StyledCalculatorButtonPanel>
  );
};

CalculatorButtonPanel.propTypes = propTypes;

export default CalculatorButtonPanel;

const StyledCalculatorButtonPanel = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const CalculatorButtonRow = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
