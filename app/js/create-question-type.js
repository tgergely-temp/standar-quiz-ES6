import quizConfig from './questions';

const createQuestionType = () => {
  const quiz = document.getElementById('quizApp'); // Quiz
  /* ---------------------------------------------------
  * Create <style> tag
  * --------------------------------------------------- */
  const listStyle = document.createElement('style'); 
  /* ---------------------------------------------------
  * Write css rules
  * --------------------------------------------------- */
  listStyle.innerHTML = `
    .quiz-question-options ol li:before {
      content: counter(item, ${quizConfig.optionsType || 'upper-alpha'})
    }
  `;
  /* ---------------------------------------------------
  * Append <style> tag
  * --------------------------------------------------- */
  quiz.appendChild(listStyle);
}

export default createQuestionType;
