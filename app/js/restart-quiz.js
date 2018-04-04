import initQuiz from './index';
import scrollTo from './animated-scroll';

const restartQuiz = () => {
  /* ---------------------------------------------------
  * Empty quiz content
  * --------------------------------------------------- */
  const quiz = document.getElementById('quizApp');
  quiz.innerHTML = '';

  /* ---------------------------------------------------
  * Init quiz again
  * --------------------------------------------------- */
  initQuiz();

  /* ---------------------------------------------------
  * Scroll animation
  * --------------------------------------------------- */
  const quizY = quiz.getBoundingClientRect();
  const b = document.getElementsByTagName('body')[0];
  scrollTo(b, (b.scrollTop - quizY.top), 500);
}

export default restartQuiz;
