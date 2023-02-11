import getRandomNumber from '../getRandomNumber.js';
import generalGameLogic from '../index.js';

const gameRules = 'Find the greatest common divisor of given numbers.';

const getGcd = (a, b) => {
  if (b !== 0) {
    const c = a % b;
    return getGcd(b, c);
  }
  return a;
};

const gameRound = () => {
  const a = getRandomNumber(1, 100);
  const b = getRandomNumber(1, 100);
  const question = `${a} ${b}`;

  let answerTrue = getGcd(a, b);
  answerTrue = String(answerTrue);

  return [question, answerTrue];
};

const gcdGame = () => generalGameLogic(gameRules, gameRound);

export default gcdGame;
