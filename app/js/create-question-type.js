<<<<<<< HEAD
import quizConfig from './quiz-config';
=======
import quizConfig from './questions';
>>>>>>> 67bf404da60365343d9b798ed6ce6d3d99a530dd

const createQuestionType = () => {
  const quiz = document.getElementById('quizApp'); // Quiz
  /* ---------------------------------------------------
  * Create <style> tag
  * --------------------------------------------------- */
<<<<<<< HEAD
  const listStyle = document.createElement('style');
=======
  const listStyle = document.createElement('style'); 
>>>>>>> 67bf404da60365343d9b798ed6ce6d3d99a530dd
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
