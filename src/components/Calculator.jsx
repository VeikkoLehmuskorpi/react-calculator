import React, { useState } from 'react';
import CalculatorDisplay from './CalculatorDisplay';
import CalculatorButtonPanel from './CalculatorButtonPanel';

const Calculator = () => {
  const [total, setTotal] = useState('');
  const [nextValue, setNextValue] = useState('');
  const [, setOperation] = useState('');

  const operate = () => {
    console.log('...');
  };

  const calculate = buttonName => {
    // Reset
    if (buttonName === 'CE') {
      setTotal('');
      setNextValue('');
      setOperation('');
    }

    // Numbers
    if (Number.isInteger(Number(buttonName))) {
      const number = Number(buttonName);
      const result = String(total + number);
      setTotal(result);
    }

    // Dot
    if (buttonName === '.') {
      // Do nothing if total already contains a dot
      if (total.includes('.')) return;

      const result = `${total}.`;
      setTotal(result);
    }

    // Get total
    if (buttonName === '=') {
      // Only operate if there's a next value to operate on
      if (nextValue) {
        operate();
      }
    }
  };

  const handleClick = buttonName => {
    calculate(buttonName);
  };

  return (
    <div>
      <CalculatorDisplay value={nextValue || total || '0'} />
      <CalculatorButtonPanel clickHandler={handleClick} />
    </div>
  );
};

export default Calculator;
