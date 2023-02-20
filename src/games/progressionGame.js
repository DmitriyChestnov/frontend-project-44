import getRandomNumber from '../getRandomNumber.js';
import generalGameLogic from '../index.js';

const gameRules = 'What number is missing in the progression?';
const progressionLength = 10;

const getProgression = (numStart, step) => {
  const result = [numStart];
  let num = numStart;

  for (let i = 0; i < progressionLength; i += 1) {
    num += step;
    result.push(num);
  }
  return result;
};

const gameRound = () => {
  const num = getRandomNumber(1, 19);
  const step = getRandomNumber(2, 19);
  const progression = getProgression(num, step);

  const progIndex = getRandomNumber(0, 9);
  let answerTrue = progression[progIndex];
  progression[progIndex] = '..';

  answerTrue = String(answerTrue);
  const question = progression.join(' ');
  return [question, answerTrue];
};

const progressionGame = () => generalGameLogic(gameRules, gameRound);

export default progressionGame;
