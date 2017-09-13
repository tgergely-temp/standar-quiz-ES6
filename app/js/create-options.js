const createOptions = (optionsObj) => {

  const options = optionsObj.map(option => {
    const li = document.createElement('li');
    const text = document.createTextNode(option.copy);

    li.appendChild(text);
    li.addEventListener('click', function(){console.log('test')});
    return li;
  });
  return options;
}

export default createOptions;
