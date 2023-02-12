import getRandomNumber from '../getRandomNumber.js';
import generalGameLogic from '../index.js';

const gameRules = 'What is the result of the expression?';

const gameRound = () => {
  const symbols = ['+', '-', '*'];
  const operation = symbols[getRandomNumber(0, 2)];

  const firstOperand = getRandomNumber(1, 30);
  const secondOperand = getRandomNumber(1, 30);

  const question = `${firstOperand} ${operation} ${secondOperand}`;
  let answerTrue = '';

  switch (operation) {
    case '+':
      answerTrue = firstOperand + secondOperand;
      break;
    case '-':
      answerTrue = firstOperand - secondOperand;
      break;
    case '*':
      answerTrue = firstOperand * secondOperand;
      break;
    default:
      return null;
  }
  answerTrue = String(answerTrue);
  return [question, answerTrue];
};

const calcGame = () => generalGameLogic(gameRules, gameRound);

export default calcGame;
