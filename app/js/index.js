import quizConfig from './questions';
import createQuestion from './create-question';
import createQuestionType from './create-question-type';
import createSubmitButton from './create-submit-button';
import '../css/styles.css';

const initQuiz = () => {
  /* ---------------------------------------------------------------
  * Creating the div tag to wrapping the quiz
  * ---------------------------------------------------------------- */
  const quizWidth = quizConfig.fullWidth ? 'full-width' : 'article-width';
  const mainWrapper = document.getElementById('quizApp');

  if(!mainWrapper) {
    const mainWrapper =  `<div class="quiz-wrap ${quizWidth}" id="quizApp"></div>`;
    document.write(mainWrapper);
  }

  /* ---------------------------------------------------------------
  * Iterating through questions
  * --------------------------------------------------------------- */
  quizConfig.quiz.map((item, indx) => {
    createQuestion(item, indx);
  });
  /* --------------------------------------------------------------------------
  * Adding type for question options. This is to determine what type of
  * options is going to be the quiz. Eg: upper-alpha, upper-roman, decimal...
  * Editable in questions.js file
  * ------------------------------------------------------------------------ */
  createQuestionType();

  /* ---------------------------------------------------------------
  * Creating submit button
  * --------------------------------------------------------------- */
  createSubmitButton();
}

/* ---------------------------------------------------------------
* Initialising quiz
* --------------------------------------------------------------- */
initQuiz();

export default initQuiz;
