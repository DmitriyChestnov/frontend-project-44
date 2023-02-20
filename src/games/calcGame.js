import getRandomNumber from '../getRandomNumber.js';
import generalGameLogic from '../index.js';

const gameRules = 'What is the result of the expression?';
const symbols = ['+', '-', '*'];

const calculate = (a, b, operation) => {
  switch (operation) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      return null;
  }
};

const getAnswerAndQuestion = () => {
  const operation = symbols[getRandomNumber(0, 2)];

  const firstOperand = getRandomNumber(1, 30);
  const secondOperand = getRandomNumber(1, 30);

  const question = `${firstOperand} ${operation} ${secondOperand}`;
  const answerTrue = calculate(firstOperand, secondOperand, operation).toString();
  return [question, answerTrue];
};

const calcGame = () => generalGameLogic(gameRules, getAnswerAndQuestion);

export default calcGame;
