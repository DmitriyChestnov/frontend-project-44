import getRandomNumber from '../getRandomNumber.js';
import generalGameLogic from '../index.js';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const gameRound = () => {
  const num = getRandomNumber(2, 200);
  const question = `${num}`;

  const answerTrue = isPrime(num) ? 'yes' : 'no';

  return [question, answerTrue];
};

const primeGame = () => generalGameLogic(gameRules, gameRound);

export default primeGame;
