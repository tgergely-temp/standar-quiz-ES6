import initQuiz from './index';
import scrollTo from './animated-scroll';

const restartQuiz = () => {
  const quiz = document.getElementById('quizApp');
  quiz.innerHTML = '';

  initQuiz();

  // Scroll Animation
  const quizY = quiz.getBoundingClientRect();
  scrollTo(document.body, quizY.top, 500);
}

export default restartQuiz;
