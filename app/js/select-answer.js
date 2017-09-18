import quizConfig from './questions';

const selectAnswer = e => {
  const quizLength = quizConfig.quiz.length;
  const answers = e.target.parentNode.children;
  const answersArr = [].slice.call(answers); // Convert to Array
  const selected = e.target;
  const submitBtn = document.querySelector('#submitBtn');

  /* ---------------------------------------------------
  * Clear previous option selected
  * --------------------------------------------------- */
  answersArr.map(a => {
    if (a.className) {
      a.className = '';
    }
  });

  /* ---------------------------------------------------
  * Selec answer
  * --------------------------------------------------- */
  selected.className = 'selected';

  /* ---------------------------------------------------
  * Active submit button if all questions have been
  * answered
  * --------------------------------------------------- */
  const questionsSelected = document.querySelectorAll('#quizApp li.selected').length;
  if (questionsSelected === quizLength) {
    submitBtn.removeAttribute('disabled');
    submitBtn.classList.add('active');
  }
}

export default selectAnswer;
