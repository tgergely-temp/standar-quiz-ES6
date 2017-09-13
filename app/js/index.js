import quizConfig from './questions';
import createQuestion from './create-question';
import createQuestionType from './create-question-type';
import '../css/styles.css';

const numberQuestions = quizConfig.quiz.length;

function initQuiz() {
  quizConfig.quiz.map((item, indx) => {
    createQuestion(item, indx);
  });
  // Adding type for question options
  createQuestionType();
}

// Initialising quiz
initQuiz();
