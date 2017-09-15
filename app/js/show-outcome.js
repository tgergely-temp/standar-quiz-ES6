import quizConfig from './questions';
import restartQuiz from './restart-quiz';
import scrollTo from './animated-scroll';

const showOutcome = (score, nQuestions, outcome) => {
  const wrapper = document.getElementById('quizApp');
  const restartBtn = document.createElement('button');
  const quizOutcome = document.createElement('div');

  quizOutcome.setAttribute('class', 'quiz-outcome fade-in');
  restartBtn.setAttribute('type', 'button');
  restartBtn.setAttribute('id', 'restartBtn');
  restartBtn.innerHTML = 'Restart';

  const markup = `
      <div class="score">
        <h3>You scored</h3>
        <div class="total-score">
          ${score}/${nQuestions}
        </div>
      </div>

      <div class="outcome">
        <h3>${outcome.title}</h3>
        <p>${outcome.explanation}</p>
      </div>
  `;

  quizOutcome.innerHTML = markup;
  const randomNum = Math.floor(Math.random()*(9999-1000+1)+1000);

  if (quizConfig.competiton_embed !== '') {
    const scriptTag = document.createElement('script');
    const iFrameTag = document.createElement('iframe');
    const separator = document.createElement('hr');

    iFrameTag.setAttribute('src', `https://display.engagesciences.com/display/container/dc/${quizConfig.competitonEmbedCode}`);
    iFrameTag.setAttribute('scrolling','no');
    iFrameTag.setAttribute('id',`ngxFrame${randomNum}`);
    iFrameTag.setAttribute('allowTransparency','true');
    iFrameTag.setAttribute('class','quiz-competition fade-in');
    scriptTag.setAttribute('src', 'https://display.engagesciences.com/ui/ngx.embed.min.js');
    separator.className = 'quiz-separator';

    quizOutcome.appendChild(separator);
    quizOutcome.appendChild(scriptTag);
    quizOutcome.appendChild(iFrameTag);
  }

  wrapper.appendChild(quizOutcome);
  wrapper.appendChild(restartBtn);

  // Scroll Animation
  const outcomeY = quizOutcome.getBoundingClientRect();
  const b = document.getElementsByTagName('body')[0];
  scrollTo(b, (b.scrollTop + outcomeY.top), 500);

  restartBtn.addEventListener('click', restartQuiz);
}

export default showOutcome;
