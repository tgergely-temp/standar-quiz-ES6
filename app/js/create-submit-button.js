import checkAnswers from './check-answers';

const createSubmitButton = () => {
  /* ---------------------------------------------------
  * Quiz wrapper
  * --------------------------------------------------- */
  const wrapper = document.getElementById('quizApp');

  /* ---------------------------------------------------
  * Create submit button and set attributes
  * --------------------------------------------------- */
  const button = document.createElement('input');
  button.setAttribute('type', 'submit');
  button.setAttribute('id', 'submitBtn');
  button.setAttribute('disabled', 'disabled');

  /* ---------------------------------------------------
  * Add listener and append button
  * --------------------------------------------------- */
  button.addEventListener('click', checkAnswers)
  wrapper.appendChild(button);
}

export default createSubmitButton;
