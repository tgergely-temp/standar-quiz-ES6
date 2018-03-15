import checkAnswers from './check-answers';

const createSubmitButton = () => {
  /* ---------------------------------------------------
  * Quiz wrapper
  * --------------------------------------------------- */
  const wrapper = document.getElementById('quizApp');

  /* ---------------------------------------------------
  * Create submit button and set attributes
  * --------------------------------------------------- */
  const button = document.createElement('button');
  button.setAttribute('type', 'submit');
  button.setAttribute('id', 'submitBtn');
  button.setAttribute('class', 'btn submit');
  button.setAttribute('disabled', 'disabled');
  button.innerHTML = 'Submit';

  /* ---------------------------------------------------
  * Add listener and append button
  * --------------------------------------------------- */
  button.addEventListener('click', checkAnswers)
  wrapper.appendChild(button);
}

export default createSubmitButton;
