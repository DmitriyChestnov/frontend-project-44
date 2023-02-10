import * as readlineSync from 'readline-sync';

const generalGameLogic = (gameRules, gameRound) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}!`);
  console.log(gameRules);

  for (let i = 0; i < 3;) {
    const round = gameRound();
    const question = round[0];
    const answerTrue = round[1];
    console.log(`Quetion: ${question}`);
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

export default generalGameLogic;
