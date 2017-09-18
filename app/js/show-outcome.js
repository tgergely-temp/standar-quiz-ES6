import quizConfig from './questions';
import restartQuiz from './restart-quiz';
import scrollTo from './animated-scroll';
import getAdobeID from './get-adobeid';

const showOutcome = (score, nQuestions, outcome) => {
  /* ---------------------------------------------------
  * Create elements and set attributes
  * --------------------------------------------------- */
  const wrapper = document.getElementById('quizApp');
  const restartBtn = document.createElement('button');
  const quizOutcome = document.createElement('div');

  quizOutcome.setAttribute('class', 'quiz-outcome fade-in');
  restartBtn.setAttribute('type', 'button');
  restartBtn.setAttribute('id', 'restartBtn');
  restartBtn.innerHTML = 'Restart';

  /* ---------------------------------------------------
  * Outcome markup
  * --------------------------------------------------- */
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

  /* ---------------------------------------------------
  * Adobe Analytics
  * --------------------------------------------------- */
  const campaignId = document.head.querySelector('[name="DCSext.campaignId"]').content || '';

  _satellite.setVar('interactive', `cid: ${campaignId} - Standard quiz - score: ${score}`);
  _satellite.track('sparkinteractive');

  /* ---------------------------------------------------
  * Get a random number to generate an unique iFrame ID
  * --------------------------------------------------- */
  const randomNum = Math.floor(Math.random()*(9999-1000+1)+1000);

  /* ---------------------------------------------------
  * Competition Form (WayIn)
  * --------------------------------------------------- */
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

    iFrameTag.addEventListener('load', () => {
      NGX.Embed.sendMessage({
        id: `ngxFrame${randomNum}`,
        action: 'setfieldvalues',
        payload: {
          quizscore: `${score}`,
          adobe_id: getAdobeID()
        }
      });
    });
  }

  /* ---------------------------------------------------
  * Attaching elements to the DOM
  * --------------------------------------------------- */
  wrapper.appendChild(quizOutcome);
  wrapper.appendChild(restartBtn);

  /* ---------------------------------------------------
  * Scroll animation to show results and
  * competition (if any) after submit quiz
  * --------------------------------------------------- */
  const outcomeY = quizOutcome.getBoundingClientRect();
  const b = document.getElementsByTagName('body')[0];
  scrollTo(b, (b.scrollTop + outcomeY.top), 500);

  /* ---------------------------------------------------
  * Restart button action
  * --------------------------------------------------- */
  restartBtn.addEventListener('click', restartQuiz);
}

export default showOutcome;
