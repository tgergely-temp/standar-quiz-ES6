import selectAnswer from './select-answer';

const createOptions = (optionsObj) => {
  /* ---------------------------------------------------
  * Create and append <li> tag for each answer option
  * --------------------------------------------------- */
  const options = optionsObj.map(option => {
    const li = document.createElement('li');
    const text = document.createTextNode(option.copy);

    li.appendChild(text);
    li.addEventListener('click', selectAnswer);
    return li;
  });
  return options;
}

export default createOptions;
