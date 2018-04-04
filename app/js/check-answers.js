import quizConfig from './quiz-config';
import showOutcome from './show-outcome';

const checkAnswers = () => {
  let score = 0;
  let selectedAnswerIndex = [];
  let mostFrequentAnswers = [];

  /* ---------------------------------------------------
  * Array of questions
  * --------------------------------------------------- */
  const questions = document.querySelectorAll('.quiz-question-options'); // Node List
  const questionsArray = [].slice.call(questions); // Conver to array

  const submitBtn = document.querySelector('#submitBtn');
  const restartBtn = document.createElement('input');

  /* ---------------------------------------------------
  * Iterate question
  * --------------------------------------------------- */
  questionsArray.map((question, index) => {
    const answers = quizConfig.quiz[index].options;
    const options = question.querySelectorAll('li');

    /* ---------------------------------------------------
    * Check if question is correct and increase score if so
    * --------------------------------------------------- */
    answers.map((answer, index) => {
      const isCorrect = answer.correct ? 'correct' : 'incorrect';

      if (options[index].className === 'selected') {
        selectedAnswerIndex.push(index + 1);
      }
      if (answer.correct && options[index].className === 'selected') {
        score++;
      }
      options[index].classList.add(isCorrect);
    });
  });

  /* ---------------------------------------------------
  * Calculate what answer(s) the user selected the most
  * --------------------------------------------------- */
  let tally = selectedAnswerIndex.reduce((obj, current) => {
    obj[current] = obj[current] ? obj[current] + 1 : 1;
    return obj;
  }, {});
  let highest = Math.max(...Object.values(tally));
  mostFrequentAnswers = Object.keys(tally).filter(index => tally[index] === highest);

  /* ---------------------------------------------------
  * Hide submit button
  * --------------------------------------------------- */
  submitBtn.style.display = 'none';

  /* ---------------------------------------------------
  * Show result and outcome
  * --------------------------------------------------- */
  showOutcome(score, mostFrequentAnswers, quizConfig.quiz.length, quizConfig.outcome[score]);
};

export default checkAnswers;
