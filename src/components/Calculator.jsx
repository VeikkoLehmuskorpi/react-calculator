import React, { useState } from 'react';
import CalculatorDisplay from './CalculatorDisplay';
import CalculatorButtonPanel from './CalculatorButtonPanel';

const Calculator = () => {
  const [total, setTotal] = useState(null);
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);

  console.log(
    `Operation: ${operation} (${typeof operation}), total: ${total} (${typeof total}), nextValue: ${next} (${typeof next})`
  );

  const isNumber = valueToCheck => {
    return Number.isInteger(valueToCheck);
  };

  const operate = () => {
    const totalNbr = Number(total);
    const nextNbr = Number(next);

    // Plus
    if (operation === '+') {
      const result = totalNbr + nextNbr;
      const resultStr = String(result);

      setTotal(resultStr);
      setNext(null);
      setOperation(null);
    }

    // Minus
    if (operation === '-') {
      const result = totalNbr - nextNbr;
      const resultStr = String(result);

      setTotal(resultStr);
      setNext(null);
      setOperation(null);
    }

    // Multiply
    if (operation === 'x') {
      const result = totalNbr * nextNbr;
      const resultStr = String(result);

      setTotal(resultStr);
      setNext(null);
      setOperation(null);
    }

    // Divide
    if (operation === '÷') {
      const result = totalNbr / nextNbr;
      const resultStr = String(result);

      setTotal(resultStr);
      setNext(null);
      setOperation(null);
    }

    // Percentage
    if (operation === '%') {
      const result = totalNbr / 100;
      console.log(result);
      const resultStr = String(result);

      setTotal(resultStr);
      setNext(null);
      setOperation(null);
    }
  };

  const calculate = buttonName => {
    // Reset
    if (buttonName === 'CE') {
      setTotal(null);
      setNext(null);
      setOperation(null);
    }

    // Numbers
    if (isNumber(Number(buttonName))) {
      // No operation, append number
      if (!operation) {
        // Total is zero, replace
        if (total === '0') {
          setTotal(buttonName);
          return;
        }

        const number = Number(buttonName);
        const result = String(total + number);
        setTotal(result);

        return;
      }

      // Operation selected already
      const numberStr = String(buttonName);
      setNext(numberStr);
    }

    // Plus
    if (buttonName === '+') {
      setOperation(buttonName);
    }

    // Minus
    if (buttonName === '-') {
      setOperation(buttonName);
    }

    // Multiply
    if (buttonName === 'x') {
      setOperation(buttonName);
    }

    // Divide
    if (buttonName === '÷') {
      setOperation(buttonName);
    }

    // Percentage
    if (buttonName === '%') {
      setOperation(buttonName);
      // TODO: This gets called immediately but the state value is not updated until the next render, so when operate method is called, there's no operation in the state and nothing is operated.
      operate();
    }

    // Dot
    if (buttonName === '.') {
      // Do nothing if total already contains a dot or no total yet
      if (!total || total.includes('.')) return;

      const result = `${total}.`;
      setTotal(result);
    }

    // Get total
    if (buttonName === '=') {
      // Only operate if there's a next value to operate on
      if (next) {
        operate();
      }
    }
  };

  const handleClick = buttonName => {
    calculate(buttonName);
  };

  return (
    <div>
      <CalculatorDisplay value={next || total || '0'} />
      <CalculatorButtonPanel clickHandler={handleClick} />
    </div>
  );
};

export default Calculator;
