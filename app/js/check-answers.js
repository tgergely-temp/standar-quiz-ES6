<<<<<<< HEAD
import quizConfig from './quiz-config';
=======
import quizConfig from './questions';
>>>>>>> 67bf404da60365343d9b798ed6ce6d3d99a530dd
import showOutcome from './show-outcome';

const checkAnswers = () => {
  let score = 0;

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

      if (answer.correct && options[index].className === 'selected') {
        score++;
      }
      options[index].classList.add(isCorrect);
    });
  })

  /* ---------------------------------------------------
  * Hide submit button
  * --------------------------------------------------- */
  submitBtn.style.display = 'none';

  /* ---------------------------------------------------
  * Show result and outcome
  * --------------------------------------------------- */
  showOutcome(score, quizConfig.quiz.length, quizConfig.outcome[score]);
};

export default checkAnswers;
