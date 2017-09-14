import quizConfig from './questions';

const createQuestionType = () => {
  const quiz = document.getElementById('quizApp'); // Quiz
  const listStyle = document.createElement('style'); // Creating <style> tag

  // Writing css rules
  listStyle.innerHTML = `
    .quiz-question-options ol li:before {
      content: counter(item, ${quizConfig.optionsType || 'upper-alpha'})
    }
  `;

  // Appending <style> tag
  quiz.appendChild(listStyle);
}

export default createQuestionType;
