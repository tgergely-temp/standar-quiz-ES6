/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var prod = true;
var STATICPATH = prod ? '/content/dam/travel/Spark/St%20Kitts/2018/quiz/' : './';

var quizConfig = {
  // Options Type: circle | disc | square | armenian | cjk-ideographic | decimal | decimal-leading-zero | georgian | hebrew | hiragana | hiragana-iroha | katakana | katakana-iroha | lower-alpha | lower-greek | lower-latin | lower-roman | upper-alpha | upper-greek | upper-latin | upper-roman | none | inherit
  optionsType: 'upper-alpha',
  fullWidth: false,
  // competitonEmbedCode: '',
  quiz: [{
    question: 'The capital of St. Kitts is...',
    img: {
      src: STATICPATH + 'imgs/1.jpg',
      alt: 'capital'
    },
    options: [{
      copy: 'Basseterre',
      correct: true
    }, {
      copy: 'Kingston',
      correct: false
    }, {
      copy: 'Nassau',
      correct: false
    }, {
      copy: 'Freetown',
      correct: false
    }, {
      copy: 'Port Louis',
      correct: false
    }],
    feedback: ''
  }, {
    question: 'The crater at the heart of St. Kitts\' tallest volcano, Mount Liamuiga, is known as...',
    img: {
      src: STATICPATH + 'imgs/2.jpg',
      alt: 'crater'
    },
    options: [{
      copy: 'God’s Washbasin',
      correct: false
    }, {
      copy: 'The Devil’s Punchbowl',
      correct: false
    }, {
      copy: 'Hamish’s Porridge Bowl',
      correct: false
    }, {
      copy: 'Giant’s Salad Bowl',
      correct: true
    }, {
      copy: 'Jolly Green Giant',
      correct: false
    }],
    feedback: ''
  }, {
    question: 'Which of the following competed for St Kitts at the Olympics...',
    img: {
      src: STATICPATH + 'imgs/3.jpg',
      alt: 'beaches'
    },
    options: [{
      copy: 'Ato Boldon',
      correct: false
    }, {
      copy: 'Kim Collins',
      correct: true
    }, {
      copy: 'Raymond Stewart',
      correct: false
    }, {
      copy: 'Usain Bolt',
      correct: false
    }, {
      copy: 'Frankie Fredericks',
      correct: false
    }],
    feedback: ''
  }, {
    question: 'People who live in St. Kitts are called...',
    img: {
      src: STATICPATH + 'imgs/4.jpg',
      alt: 'people'
    },
    options: [{
      copy: 'Cuban',
      correct: false
    }, {
      copy: 'Nevisians',
      correct: false
    }, {
      copy: 'Haitians',
      correct: false
    }, {
      copy: 'Kittitians',
      correct: true
    }, {
      copy: 'Bajans',
      correct: false
    }],
    feedback: ''
  }, {
    question: 'The official language of St. Kitts is...',
    img: {
      src: STATICPATH + 'imgs/5.jpg',
      alt: 'language'
    },
    options: [{
      copy: 'English',
      correct: true
    }, {
      copy: 'Spanish',
      correct: false
    }, {
      copy: 'French',
      correct: false
    }, {
      copy: 'Dutch',
      correct: false
    }, {
      copy: 'Japanese',
      correct: false
    }],
    feedback: ''
  }, {
    question: 'The sister island of St. Kitts is called...',
    img: {
      src: STATICPATH + 'imgs/6.jpg',
      alt: 'sister'
    },
    options: [{
      copy: 'Montserrat',
      correct: false
    }, {
      copy: 'Jamaica',
      correct: false
    }, {
      copy: 'Nevis',
      correct: true
    }, {
      copy: 'Aruba',
      correct: false
    }, {
      copy: 'Eel Pie Island',
      correct: false
    }],
    feedback: ''
  }, {
    question: 'If somebody offers you goat water, should you...',
    img: {
      src: STATICPATH + 'imgs/7.jpg',
      alt: 'goat water'
    },
    options: [{
      copy: 'Tell them you’re not thirsty',
      correct: false
    }, {
      copy: 'Say you prefer cow’s milk',
      correct: false
    }, {
      copy: 'Mix it with slimline tonic',
      correct: false
    }, {
      copy: 'Bring some shampoo and conditioner',
      correct: false
    }, {
      copy: 'Say yum and dig in to delicious homemade stew',
      correct: true
    }],
    feedback: ''
  }],
  outcome: [{
    title: 'Oh dear, you need to lie down in the shade…',
    explanation: 'Come to restful St. Kitts for your much-needed holiday. ',
    img: {
      src: STATICPATH + 'imgs/answers/1.jpg',
      alt: 'Oh dear'
    }
  }, {
    title: 'Oh dear, you need to lie down in the shade…',
    explanation: 'Come to restful St. Kitts for your much-needed holiday. ',
    img: {
      src: STATICPATH + 'imgs/answers/1.jpg',
      alt: 'Oh dear'
    }
  }, {
    title: 'Oh dear, you need to lie down in the shade…',
    explanation: 'Come to restful St. Kitts for your much-needed holiday. ',
    img: {
      src: STATICPATH + 'imgs/answers/1.jpg',
      alt: 'Oh dear'
    }
  }, {
    title: 'Oh dear, you need to lie down in the shade…',
    explanation: 'Come to restful St. Kitts for your much-needed holiday. ',
    img: {
      src: STATICPATH + 'imgs/answers/1.jpg',
      alt: 'Oh dear'
    }
  }, {
    title: 'Hey, that’s not bad at all.',
    explanation: 'There’s nothing like a holiday in St. Kitts to brush up on your local knowledge',
    img: {
      src: STATICPATH + 'imgs/answers/2.jpg',
      alt: 'not bad'
    }
  }, {
    title: 'Hey, that’s not bad at all.',
    explanation: 'There’s nothing like a holiday in St. Kitts to brush up on your local knowledge',
    img: {
      src: STATICPATH + 'imgs/answers/2.jpg',
      alt: 'not bad'
    }
  }, {
    title: 'Hey, that’s not bad at all.',
    explanation: 'There’s nothing like a holiday in St. Kitts to brush up on your local knowledge',
    img: {
      src: STATICPATH + 'imgs/answers/2.jpg',
      alt: 'not bad'
    }
  }, {
    title: 'Great score, you’re a true Kittitian!',
    explanation: 'There’s always more to discover in St. Kitts',
    img: {
      src: STATICPATH + 'imgs/answers/3.jpg',
      alt: 'Great'
    }
  }]
};

exports.default = quizConfig;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _questions = __webpack_require__(0);

var _questions2 = _interopRequireDefault(_questions);

var _createQuestion = __webpack_require__(3);

var _createQuestion2 = _interopRequireDefault(_createQuestion);

var _createQuestionType = __webpack_require__(6);

var _createQuestionType2 = _interopRequireDefault(_createQuestionType);

var _createSubmitButton = __webpack_require__(7);

var _createSubmitButton2 = _interopRequireDefault(_createSubmitButton);

__webpack_require__(12);

__webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initQuiz = function initQuiz() {
  /* ---------------------------------------------------------------
  * Creating the div tag to wrapping the quiz
  * ---------------------------------------------------------------- */
  var quizWidth = _questions2.default.fullWidth ? 'full-width' : 'article-width';
  var mainWrapper = document.getElementById('quizApp');

  if (!mainWrapper) {
    var _mainWrapper = '<div class="quiz-wrap ' + quizWidth + '" id="quizApp"></div>';
    document.write(_mainWrapper);
  }

  /* ---------------------------------------------------------------
  * Iterating through questions
  * --------------------------------------------------------------- */
  _questions2.default.quiz.map(function (item, indx) {
    (0, _createQuestion2.default)(item, indx);
  });
  /* --------------------------------------------------------------------------
  * Adding type for question options. This is to determine what type of
  * options is going to be the quiz. Eg: upper-alpha, upper-roman, decimal...
  * Editable in questions.js file
  * ------------------------------------------------------------------------ */
  (0, _createQuestionType2.default)();

  /* ---------------------------------------------------------------
  * Creating submit button
  * --------------------------------------------------------------- */
  (0, _createSubmitButton2.default)();
};

/* ---------------------------------------------------------------
* Initialising quiz
* --------------------------------------------------------------- */
initQuiz();

exports.default = initQuiz;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/* ---------------------------------------------------
* Scroll animation from GitHub user Andjosh
* https://gist.github.com/andjosh/6764939
* --------------------------------------------------- */
var scrollTo = function scrollTo(element, to, duration) {
    var start = element.scrollTop,
        change = to - start,
        increment = 20;
    var currentTime = 0;

    var animateScroll = function animateScroll() {
        currentTime += increment;
        var val = Math.easeInOutQuad(currentTime, start, change, duration);
        element.scrollTop = val;
        if (currentTime < duration) {
            setTimeout(animateScroll, increment);
        }
    };
    animateScroll();
};

//t = current time
//b = start value
//c = change in value
//d = duration
Math.easeInOutQuad = function (t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
};

exports.default = scrollTo;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createOptions = __webpack_require__(4);

var _createOptions2 = _interopRequireDefault(_createOptions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createQuestion = function createQuestion(item, index) {
  var wrapper = document.getElementById('quizApp'); // Main wrapper
  var questionNumber = index + 1;

  /* ---------------------------------------------------
  * Questions template markup
  * --------------------------------------------------- */

  var ifimg = !item.img ? '' : '\n    <div class="quiz-question-img">\n      <img src="' + item.img.src + '" alt="' + item.img.alt + '" />\n    </div>\n  ';

  var markup = '\n    <!-- Question Header -->\n    <div class="quiz-question-header">\n      <div class="quiz-question-number">\n        Q.' + questionNumber + '\n      </div>\n      <div class="quiz-question-text">\n        <p>' + item.question + '</p>\n      </div>\n      ' + ifimg + '\n    </div>\n    <!--// Question Header -->\n    <!-- Question Options -->\n    <div class="quiz-question-options">\n      <ol>\n      </ol>\n    </div>\n    <!--// Question Options -->';

  /* ---------------------------------------------------
  * Create a block per question
  * --------------------------------------------------- */
  var block = document.createElement('div');
  block.className = 'quiz-question-block';
  block.innerHTML = markup;

  /* ---------------------------------------------------
  * Get the OL reference
  * --------------------------------------------------- */
  var list = block.querySelector('ol');

  /* ---------------------------------------------------
  * Create Answers and append answers
  * --------------------------------------------------- */
  var options = (0, _createOptions2.default)(item.options);

  options.map(function (option) {
    list.appendChild(option);
  });

  /* ---------------------------------------------------
  * If feedback
  * --------------------------------------------------- */
  if (item.feedback.length) {
    var feedbackDiv = document.createElement('div');
    feedbackDiv.className = 'quiz-question-feedback';

    // Feedback text
    var feedbackTxt = document.createTextNode(item.feedback);
    feedbackDiv.appendChild(feedbackTxt);

    // Apending after list of options/answers
    block.appendChild(feedbackDiv);
  }
  /* ---------------------------------------------------
  * Appending block to Main Wrapper
  * --------------------------------------------------- */
  wrapper.appendChild(block);
};

exports.default = createQuestion;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _selectAnswer = __webpack_require__(5);

var _selectAnswer2 = _interopRequireDefault(_selectAnswer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createOptions = function createOptions(optionsObj) {
  /* ---------------------------------------------------
  * Create and append <li> tag for each answer option
  * --------------------------------------------------- */
  var options = optionsObj.map(function (option) {
    var li = document.createElement('li');
    var text = document.createTextNode(option.copy);

    li.appendChild(text);
    li.addEventListener('click', _selectAnswer2.default);
    return li;
  });
  return options;
};

exports.default = createOptions;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _questions = __webpack_require__(0);

var _questions2 = _interopRequireDefault(_questions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var selectAnswer = function selectAnswer(e) {
  var quizLength = _questions2.default.quiz.length;
  var answers = e.target.parentNode.children;
  var answersArr = [].slice.call(answers); // Convert to Array
  var selected = e.target;
  var submitBtn = document.querySelector('#submitBtn');

  /* ---------------------------------------------------
  * Clear previous option selected
  * --------------------------------------------------- */
  answersArr.map(function (a) {
    if (a.className) {
      a.className = '';
    }
  });

  /* ---------------------------------------------------
  * Selec answer
  * --------------------------------------------------- */
  selected.className = 'selected';

  /* ---------------------------------------------------
  * Active submit button if all questions have been
  * answered
  * --------------------------------------------------- */
  var questionsSelected = document.querySelectorAll('#quizApp li.selected').length;
  if (questionsSelected === quizLength) {
    submitBtn.removeAttribute('disabled');
    submitBtn.classList.add('active');
  }
};

exports.default = selectAnswer;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _questions = __webpack_require__(0);

var _questions2 = _interopRequireDefault(_questions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createQuestionType = function createQuestionType() {
  var quiz = document.getElementById('quizApp'); // Quiz
  /* ---------------------------------------------------
  * Create <style> tag
  * --------------------------------------------------- */
  var listStyle = document.createElement('style');
  /* ---------------------------------------------------
  * Write css rules
  * --------------------------------------------------- */
  listStyle.innerHTML = '\n    .quiz-question-options ol li:before {\n      content: counter(item, ' + (_questions2.default.optionsType || 'upper-alpha') + ')\n    }\n  ';
  /* ---------------------------------------------------
  * Append <style> tag
  * --------------------------------------------------- */
  quiz.appendChild(listStyle);
};

exports.default = createQuestionType;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _checkAnswers = __webpack_require__(8);

var _checkAnswers2 = _interopRequireDefault(_checkAnswers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createSubmitButton = function createSubmitButton() {
  /* ---------------------------------------------------
  * Quiz wrapper
  * --------------------------------------------------- */
  var wrapper = document.getElementById('quizApp');

  /* ---------------------------------------------------
  * Create submit button and set attributes
  * --------------------------------------------------- */
  var button = document.createElement('button');
  button.setAttribute('type', 'submit');
  button.setAttribute('id', 'submitBtn');
  button.setAttribute('disabled', 'disabled');
  button.innerHTML = 'Submit';

  /* ---------------------------------------------------
  * Add listener and append button
  * --------------------------------------------------- */
  button.addEventListener('click', _checkAnswers2.default);
  wrapper.appendChild(button);
};

exports.default = createSubmitButton;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _questions = __webpack_require__(0);

var _questions2 = _interopRequireDefault(_questions);

var _showOutcome = __webpack_require__(9);

var _showOutcome2 = _interopRequireDefault(_showOutcome);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var checkAnswers = function checkAnswers() {
  var score = 0;

  /* ---------------------------------------------------
  * Array of questions
  * --------------------------------------------------- */
  var questions = document.querySelectorAll('.quiz-question-options'); // Node List
  var questionsArray = [].slice.call(questions); // Conver to array

  var submitBtn = document.querySelector('#submitBtn');
  var restartBtn = document.createElement('input');

  /* ---------------------------------------------------
  * Iterate question
  * --------------------------------------------------- */
  questionsArray.map(function (question, index) {
    var answers = _questions2.default.quiz[index].options;
    var options = question.querySelectorAll('li');

    /* ---------------------------------------------------
    * Check if question is correct and increase score if so
    * --------------------------------------------------- */
    answers.map(function (answer, index) {
      var isCorrect = answer.correct ? 'correct' : 'incorrect';

      if (answer.correct && options[index].className === 'selected') {
        score++;
      }
      options[index].classList.add(isCorrect);
    });
  });

  /* ---------------------------------------------------
  * Hide submit button
  * --------------------------------------------------- */
  submitBtn.style.display = 'none';

  /* ---------------------------------------------------
  * Show result and outcome
  * --------------------------------------------------- */
  (0, _showOutcome2.default)(score, _questions2.default.quiz.length, _questions2.default.outcome[score]);
};

exports.default = checkAnswers;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _questions = __webpack_require__(0);

var _questions2 = _interopRequireDefault(_questions);

var _restartQuiz = __webpack_require__(10);

var _restartQuiz2 = _interopRequireDefault(_restartQuiz);

var _animatedScroll = __webpack_require__(2);

var _animatedScroll2 = _interopRequireDefault(_animatedScroll);

var _getAdobeid = __webpack_require__(11);

var _getAdobeid2 = _interopRequireDefault(_getAdobeid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var showOutcome = function showOutcome(score, nQuestions, outcome) {
  /* ---------------------------------------------------
  * Create elements and set attributes
  * --------------------------------------------------- */
  var wrapper = document.getElementById('quizApp');
  var restartBtn = document.createElement('button');
  var findoutmoreBtn = document.createElement('button');
  var quizOutcome = document.createElement('div');

  quizOutcome.setAttribute('class', 'quiz-outcome fade-in');
  restartBtn.setAttribute('type', 'button');
  restartBtn.setAttribute('id', 'restartBtn');
  // findoutmoreBtn.setAttribute('id', 'findoutmoreBtn');
  // findoutmoreBtn.innerHTML = 'Find out more';
  restartBtn.innerHTML = 'Restart';

  /* ---------------------------------------------------
  * Outcome markup
  * --------------------------------------------------- */

  var ifimg = !outcome.img ? '' : '<img src="' + outcome.img.src + '" alt="' + outcome.img.alt + '" />';

  var markup = '\n      <div class="score">\n        ' + ifimg + '\n        <h3>You scored</h3>\n        <div class="total-score">\n          ' + score + '/' + nQuestions + '\n        </div>\n      </div>\n\n      <div class="outcome">\n        <h3>' + outcome.title + '</h3>\n        <p>' + outcome.explanation + '</p>\n      </div>\n  ';

  quizOutcome.innerHTML = markup;

  /* ---------------------------------------------------
  * Adobe Analytics
  * --------------------------------------------------- */
  var campaignId = (document.head.querySelector('[name="DCSext.campaignId"]') || { content: null }).content;
  if (campaignId) {
    _satellite.setVar('interactive', 'cid: ' + campaignId + ' - Standard quiz - score: ' + score);
    _satellite.track('sparkinteractive');
  }

  /* ---------------------------------------------------
  * Get a random number to generate an unique iFrame ID
  * --------------------------------------------------- */
  var randomNum = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);

  /* ---------------------------------------------------
  * Competition Form (WayIn)
  * --------------------------------------------------- */
  if (_questions2.default.competiton_embed) {
    var scriptTag = document.createElement('script');
    var iFrameTag = document.createElement('iframe');
    var separator = document.createElement('hr');

    iFrameTag.setAttribute('src', 'https://display.engagesciences.com/display/container/dc/' + _questions2.default.competitonEmbedCode);
    iFrameTag.setAttribute('scrolling', 'no');
    iFrameTag.setAttribute('id', 'ngxFrame' + randomNum);
    iFrameTag.setAttribute('allowTransparency', 'true');
    iFrameTag.setAttribute('class', 'quiz-competition fade-in');
    scriptTag.setAttribute('src', 'https://display.engagesciences.com/ui/ngx.embed.min.js');
    separator.className = 'quiz-separator';

    quizOutcome.appendChild(separator);
    quizOutcome.appendChild(scriptTag);
    quizOutcome.appendChild(iFrameTag);

    iFrameTag.addEventListener('load', function () {
      /* ---------------------------------------------------
      * Score and Adobe ID get injected inside the competition
      * WayIn form.
      * It is necessary to create the input hidden fields on
      * WayIn admin beforehand with names 'quizscore' and
      * 'adobe_id' (Adobe ID is normally created already).
      * --------------------------------------------------- */
      NGX.Embed.sendMessage({
        id: 'ngxFrame' + randomNum,
        action: 'setfieldvalues',
        payload: {
          quizscore: '' + score,
          adobe_id: (0, _getAdobeid2.default)()
        }
      });
    });
  }

  /* --------------------------------------------------- 
  * Removing quiz
  * ---------------------------------------------------- */
  // const quizitems = [...wrapper.getElementsByClassName('quiz-question-block')];
  // quizitems.map(elem => elem.parentNode.removeChild(elem));
  /* ---------------------------------------------------
  * Attaching elements to the DOM
  * --------------------------------------------------- */
  wrapper.appendChild(quizOutcome);
  // wrapper.appendChild(findoutmoreBtn);
  wrapper.appendChild(restartBtn);

  /* ---------------------------------------------------
  * Scroll animation to show results and
  * competition (if any) after submit quiz
  * --------------------------------------------------- */
  var outcomeY = quizOutcome.getBoundingClientRect();
  var b = document.getElementsByTagName('body')[0];
  (0, _animatedScroll2.default)(b, b.scrollTop + outcomeY.top, 500);

  /* ---------------------------------------------------
  * Restart button action
  * --------------------------------------------------- */
  restartBtn.addEventListener('click', _restartQuiz2.default);
};

exports.default = showOutcome;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(1);

var _index2 = _interopRequireDefault(_index);

var _animatedScroll = __webpack_require__(2);

var _animatedScroll2 = _interopRequireDefault(_animatedScroll);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var restartQuiz = function restartQuiz() {
  /* ---------------------------------------------------
  * Empty quiz content
  * --------------------------------------------------- */
  var quiz = document.getElementById('quizApp');
  quiz.innerHTML = '';

  /* ---------------------------------------------------
  * Init quiz again
  * --------------------------------------------------- */
  (0, _index2.default)();

  /* ---------------------------------------------------
  * Scroll animation
  * --------------------------------------------------- */
  var quizY = quiz.getBoundingClientRect();
  var b = document.getElementsByTagName('body')[0];
  (0, _animatedScroll2.default)(b, b.scrollTop - quizY.top, 500);
};

exports.default = restartQuiz;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/* ---------------------------------------------------
* Get Adobe ID in order to match a campaigns with
* the user profile in Adobe Analytics.
* --------------------------------------------------- */
var getAdobeID = function getAdobeID() {
  var aID = document.cookie.match('(^|;)\\s*AMCV_2C7336C753C676BA0A490D4B%40AdobeOrg\\s*=\\s*([^;]+)');
  return aID ? decodeURIComponent(aID.pop()).split('|')[4] : '00000000000000000000000000000000000000';
};

exports.default = getAdobeID;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 13 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);