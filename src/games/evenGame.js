import getRandomNumber from '../getRandomNumber.js';
import generalGameLogic from '../index.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no"';
const gameRound = () => {
  const question = getRandomNumber(1, 100);
  const answerTrue = question % 2 === 0 ? 'yes' : 'no';
  return [question, answerTrue];
};

const evenGame = () => generalGameLogic(gameRules, gameRound);

export default evenGame;
