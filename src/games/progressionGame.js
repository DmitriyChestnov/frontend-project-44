import getRandomNumber from '../getRandomNumber.js';
import generalGameLogic from '../index.js';

const gameRules = 'What number is missing in the progression?';

const gameRound = () => {
  const progressionLength = 10;
  let num = getRandomNumber(1, 19);
  const step = getRandomNumber(2, 19);

  const array = [num];

  for (let i = 0; i < progressionLength; i += 1) {
    num += step;
    array.push(num);
  }

  const arrayIndex = getRandomNumber(0, 9);
  let answerTrue = array[arrayIndex];
  array[arrayIndex] = '..';

  answerTrue = String(answerTrue);
  const question = array.join(' ');
  return [question, answerTrue];
};

const progressionGame = () => generalGameLogic(gameRules, gameRound);

export default progressionGame;
