import createOptions from './create-options';

const createQuestion = (item, index) => {
  const questionNumber = index + 1;

  // Template
  const markup = `
    <!-- Question Header -->
    <div class="quiz-question-header">
      <div class="quiz-question-number">
        Q. ${questionNumber}
      </div>
      <div class="quiz-question-text">
        <p>${item.question}</p>
      </div>
    </div>
    <!--// Question Header -->
    <!-- Question Options -->
    <div class="quiz-question-options">
      <ol>
      </ol>
    </div>
    <!--// Question Options -->`;

  // Main wrapper
  const wrapper = document.getElementById('quizApp');

  // Creating a block per question
  const block = document.createElement('div');
  block.className = 'quiz-question-block';
  block.innerHTML = markup;

  // We get the OL reference
  const list = block.querySelector('ol');

  // Answers
  const options = createOptions(item.options);

  options.map(option => {
    // Appending answers
    list.appendChild(option);
  });

  // Appending block to Main Wrapper
  wrapper.appendChild(block);
}

export default createQuestion;
