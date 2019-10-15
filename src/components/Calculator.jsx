import React, { useState } from 'react';
import CalculatorDisplay from './CalculatorDisplay';
import CalculatorButtons from './CalculatorButtons';

const Calculator = () => {
  const [firstDisplayValue] = useState(0);
  const [operation] = useState();
  const [secondDisplayValue] = useState(1);

  const resetDisplay = () => {
    console.log('todo resetDisplay()...');
  };

  const calculate = () => {
    console.log('todo calculate()...');
  };

  return (
    <div>
      <CalculatorDisplay
        firstDisplayValue={firstDisplayValue}
        operation={operation}
        secondDisplayValue={secondDisplayValue}
      />
      <CalculatorButtons resetDisplay={resetDisplay} calculate={calculate} />
    </div>
  );
};

export default Calculator;
