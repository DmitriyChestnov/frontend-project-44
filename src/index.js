import * as readlineSync from 'readline-sync';

const roundCount = 3;

const generalGameLogic = (gameRules, gameRound) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}!`);

  console.log(gameRules);

  for (let i = 0; i < roundCount; i += 1) {
    const [question, answerTrue] = gameRound();
    console.log(`Question: ${question}`);

    const answerPlayer = readlineSync.question('Your answer:');
    if (answerPlayer !== answerTrue) {
      console.log(
        `'${answerPlayer}' is wrong answer ;(. Correct answer was '${answerTrue}'.`,
      );
      console.log(`Let's try again, ${name}!`);
      return false;
    }
    console.log('Correct!');
  }
  return console.log(`Congratulations, ${name}!`);
};

export default generalGameLogic;
