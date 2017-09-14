import checkAnswers from './check-answers';

const createSubmitButton = () => {
  const wrapper = document.getElementById('quizApp');
  const button = document.createElement('input');
  button.setAttribute('type', 'submit');
  button.setAttribute('id', 'submitBtn');
  button.setAttribute('disabled', 'disabled');
  button.addEventListener('click', checkAnswers)
  wrapper.appendChild(button);
}

export default createSubmitButton;
