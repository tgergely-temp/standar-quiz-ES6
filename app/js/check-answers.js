import quizConfig from './questions';
import showOutcome from './show-outcome';

const checkAnswers = () => {
  let score = 0;
  const questions = document.querySelectorAll('.quiz-question-options'); // Node List
  const questionsArray = [].slice.call(questions); // Conver to array

  const submitBtn = document.querySelector('#submitBtn');
  const restartBtn = document.createElement('input');

  questionsArray.map((question, index) => {
    const answers = quizConfig.quiz[index].options;
    const options = question.querySelectorAll('li');

    answers.map((answer, index) => {
      const isCorrect = answer.correct ? 'correct' : 'incorrect';

      if (answer.correct && options[index].className === 'selected') {
        score++;
      }
      options[index].classList.add(isCorrect);
    });
  })

  submitBtn.style.display = 'none';
  showOutcome(score, quizConfig.quiz.length, quizConfig.outcome[score]);
};

export default checkAnswers;
