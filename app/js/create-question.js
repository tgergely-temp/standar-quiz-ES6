import createOptions from './create-options';

const createQuestion = (item, index) => {
  const wrapper = document.getElementById('quizApp'); // Main wrapper
  const questionNumber = index + 1;

  /* ---------------------------------------------------
  * Questions template markup
  * --------------------------------------------------- */
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

  /* ---------------------------------------------------
  * Create a block per question
  * --------------------------------------------------- */
  const block = document.createElement('div');
  block.className = 'quiz-question-block';
  block.innerHTML = markup;

  /* ---------------------------------------------------
  * Get the OL reference
  * --------------------------------------------------- */
  const list = block.querySelector('ol');

  /* ---------------------------------------------------
  * Create Answers and append answers
  * --------------------------------------------------- */
  const options = createOptions(item.options);

  options.map(option => {
    list.appendChild(option);
  });

  /* ---------------------------------------------------
  * If feedback
  * --------------------------------------------------- */
  if (item.feedback.length) {
    const feedbackDiv = document.createElement('div');
    feedbackDiv.className = 'quiz-question-feedback';

    // Feedback text
    const feedbackTxt = document.createTextNode(item.feedback);
    feedbackDiv.appendChild(feedbackTxt)

    // Apending after list of options/answers
    block.appendChild(feedbackDiv);
  }
  /* ---------------------------------------------------
  * Appending block to Main Wrapper
  * --------------------------------------------------- */
  wrapper.appendChild(block);
}

export default createQuestion;
