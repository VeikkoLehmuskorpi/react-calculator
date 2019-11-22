import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Calculator from '../components/Calculator';

describe('Calculator', () => {
  test('renders all buttons', () => {
    const component = render(<Calculator />);

    const resetButton = component.getByText('CE');
    const plusButton = component.getByText('+');
    const minusButton = component.getByText('-');
    const percentButton = component.getByText('%');
    const divideButton = component.getByText('÷');
    const multiplyButton = component.getByText('x');
    const decimalButton = component.getByText('.');
    const equalsButton = component.getByText('=');

    const sevenButton = component.getByText('7');
    const eightButton = component.getByText('8');
    const nineButton = component.getByText('9');
    const fourButton = component.getByText('4');
    const fiveButton = component.getByText('5');
    const sixButton = component.getByText('6');
    const oneButton = component.getByText('1');
    const twoButton = component.getByText('2');
    const threeButton = component.getByText('3');

    expect(resetButton).toBeDefined();
    expect(plusButton).toBeDefined();
    expect(minusButton).toBeDefined();
    expect(percentButton).toBeDefined();
    expect(divideButton).toBeDefined();
    expect(multiplyButton).toBeDefined();
    expect(decimalButton).toBeDefined();
    expect(equalsButton).toBeDefined();

    expect(sevenButton).toBeDefined();
    expect(eightButton).toBeDefined();
    expect(nineButton).toBeDefined();
    expect(fourButton).toBeDefined();
    expect(fiveButton).toBeDefined();
    expect(sixButton).toBeDefined();
    expect(oneButton).toBeDefined();
    expect(twoButton).toBeDefined();
    expect(threeButton).toBeDefined();
  });

  test('resets when CE is clicked', () => {
    const component = render(<Calculator />);

    const calculatorDisplay = component.getAllByText('0')[0];

    const sevenButton = component.getByText('7');
    const resetButton = component.getByText('CE');

    fireEvent.click(sevenButton);
    fireEvent.click(sevenButton);
    fireEvent.click(sevenButton);

    expect(calculatorDisplay).toHaveTextContent('777');

    fireEvent.click(resetButton);

    expect(calculatorDisplay).toHaveTextContent('0');
  });

  test('appends numbers to the displayed value', () => {
    const component = render(<Calculator />);

    const calculatorDisplay = component.getAllByText('0')[0];

    const sevenButton = component.getByText('7');
    const eightButton = component.getByText('8');
    const nineButton = component.getByText('9');

    fireEvent.click(sevenButton);
    fireEvent.click(eightButton);
    fireEvent.click(nineButton);

    expect(calculatorDisplay).toHaveTextContent('789');
  });

  test('displays decimals properly', () => {
    const component = render(<Calculator />);

    const calculatorDisplay = component.getAllByText('0')[0];

    const sevenButton = component.getByText('7');
    const decimalButton = component.getByText('.');

    fireEvent.click(sevenButton);
    fireEvent.click(decimalButton);
    fireEvent.click(sevenButton);
    fireEvent.click(decimalButton);
    fireEvent.click(decimalButton);
    fireEvent.click(decimalButton);
    fireEvent.click(sevenButton);
    fireEvent.click(sevenButton);

    expect(calculatorDisplay).toHaveTextContent('7.777');
  });

  test("doesn't add a comma to a initial zero", () => {
    const component = render(<Calculator />);

    const calculatorDisplay = component.getAllByText('0')[0];

    const decimalButton = component.getByText('.');

    fireEvent.click(decimalButton);
    fireEvent.click(decimalButton);
    fireEvent.click(decimalButton);

    expect(calculatorDisplay).toHaveTextContent('0');
  });

  test('calculates addition', () => {
    const component = render(<Calculator />);

    const calculatorDisplay = component.getAllByText('0')[0];

    const sevenButton = component.getByText('7');
    const eightButton = component.getByText('8');
    const plusButton = component.getByText('+');
    const equalsButton = component.getByText('=');

    fireEvent.click(sevenButton);
    fireEvent.click(plusButton);
    fireEvent.click(eightButton);
    fireEvent.click(equalsButton);

    expect(calculatorDisplay).toHaveTextContent('15');
  });

  test('calculates subtraction', () => {
    const component = render(<Calculator />);

    const calculatorDisplay = component.getAllByText('0')[0];

    const sevenButton = component.getByText('7');
    const eightButton = component.getByText('8');
    const minusButton = component.getByText('-');
    const equalsButton = component.getByText('=');

    fireEvent.click(sevenButton);
    fireEvent.click(minusButton);
    fireEvent.click(eightButton);
    fireEvent.click(equalsButton);

    expect(calculatorDisplay).toHaveTextContent('-1');
  });

  test('calculates percentage', () => {
    const component = render(<Calculator />);

    const calculatorDisplay = component.getAllByText('0')[0];

    const fiveButton = component.getByText('5');
    const percentButton = component.getByText('%');
    const equalsButton = component.getByText('=');

    fireEvent.click(fiveButton);
    fireEvent.click(percentButton);
    fireEvent.click(equalsButton);

    expect(calculatorDisplay).toHaveTextContent('0.05');
  });

  test('calculates division', () => {
    const component = render(<Calculator />);

    const calculatorDisplay = component.getAllByText('0')[0];

    const eightButton = component.getByText('8');
    const twoButton = component.getByText('2');
    const divideButton = component.getByText('÷');
    const equalsButton = component.getByText('=');

    fireEvent.click(eightButton);
    fireEvent.click(divideButton);
    fireEvent.click(twoButton);
    fireEvent.click(equalsButton);

    expect(calculatorDisplay).toHaveTextContent('4');
  });

  test('calculates multiplication', () => {
    const component = render(<Calculator />);

    const calculatorDisplay = component.getAllByText('0')[0];

    const eightButton = component.getByText('8');
    const twoButton = component.getByText('2');
    const multiplyButton = component.getByText('x');
    const equalsButton = component.getByText('=');

    fireEvent.click(eightButton);
    fireEvent.click(multiplyButton);
    fireEvent.click(twoButton);
    fireEvent.click(equalsButton);

    expect(calculatorDisplay).toHaveTextContent('16');
  });
});
