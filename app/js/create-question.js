import createOptions from './create-options';

const createQuestion = (item, index) => {
  const wrapper = document.getElementById('quizApp'); // Main wrapper
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

  // Creating a block per question
  const block = document.createElement('div');
  block.className = 'quiz-question-block';
  block.innerHTML = markup;

  // We get the OL reference
  const list = block.querySelector('ol');

  // Answers
  const options = createOptions(item.options);

  // Appending answers
  options.map(option => {
    list.appendChild(option);
  });

  // If there is feedback
  if (item.feedback.length) {
    // Div
    const feedbackDiv = document.createElement('div');
    feedbackDiv.className = 'quiz-question-feedback';

    // Feedback text
    const feedbackTxt = document.createTextNode(item.feedback);
    feedbackDiv.appendChild(feedbackTxt)

    // Apending after list
    block.appendChild(feedbackDiv);

  }

  // Appending block to Main Wrapper
  wrapper.appendChild(block);
}

export default createQuestion;
