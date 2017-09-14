import quizConfig from './questions';

const quizLength = quizConfig.quiz.length;

const selectAnswer = e => {
  const answers = e.target.parentNode.children;
  const answersArr = [].slice.call(answers);
  const selected = e.target;
  const submitBtn = document.querySelector('#submitBtn');

  // Clear previous option
  answersArr.map(a => {
    if (a.className) {
      a.className = '';
    }
  });

  // Select Answers
  selected.className = 'selected';

  // Active submit button if all questions have been answered
  const questionsSelected = document.querySelectorAll('#quizApp li.selected').length;
  if (questionsSelected === quizLength) {
    submitBtn.removeAttribute('disabled');
    submitBtn.classList.add('active');
  }
}

export default selectAnswer;
