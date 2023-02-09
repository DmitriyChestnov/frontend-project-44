import * as readlineSync from 'readline-sync';

const generateNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const evenGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no"');

  for (let i = 0; i < 3;) {
    const number = generateNumber(1, 100);
    const answerTrue = number % 2 === 0 ? 'yes' : 'no';
    console.log(`Quetion: ${number}!`);
    const answerPlayer = readlineSync.question('Your answer:');
    if (answerPlayer === answerTrue) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(
        `'${answerPlayer}' is wrong answer ;(. Correct answer was '${answerTrue}'.`,
      );
      console.log(`Let's try again, ${name}!`);
      return false;
    }
  }
  return console.log(`Congratulations, ${name}!`);
};

export default evenGame;
