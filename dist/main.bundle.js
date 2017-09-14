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
var quizConfig = {
  // Options Type: circle | disc | square | armenian | cjk-ideographic | decimal | decimal-leading-zero | georgian | hebrew | hiragana | hiragana-iroha | katakana | katakana-iroha | lower-alpha | lower-greek | lower-latin | lower-roman | upper-alpha | upper-greek | upper-latin | upper-roman | none | inherit
  optionsType: 'upper-alpha',
  fullWidth: false,
  competitonEmbedCode: 'd28a0526-dee5-4da0-a412-896338450705',
  quiz: [{
    question: 'Which animals take part in the annual Easter Race Festival in Buccoo?',
    options: [{
      copy: 'Rabbits',
      correct: false
    }, {
      copy: 'Goats',
      correct: true
    }, {
      copy: 'Horses',
      correct: false
    }],
    feedback: ''
  }, {
    question: 'Upon seeing Tobago for the first time Christopher Columbus described the island as ‘bella forma’ (beautifully formed). But in which year did this happen?',
    options: [{
      copy: '1498',
      correct: true
    }, {
      copy: '1507',
      correct: false
    }, {
      copy: '1513',
      correct: false
    }],
    feedback: ''
  }, {
    question: 'There is a massive piece of a particular type of coral off the coast of Tobago. But which part of the body is it named after?',
    options: [{
      copy: 'Leg',
      correct: false
    }, {
      copy: 'Brain',
      correct: true
    }, {
      copy: 'Kidney',
      correct: false
    }],
    feedback: ''
  }, {
    question: 'Main Ridge Forest Reserve is the oldest protected rainforest in the western hemisphere. But when did its protection begin?',
    options: [{
      copy: '1576',
      correct: false
    }, {
      copy: '1676',
      correct: false
    }, {
      copy: '1776',
      correct: true
    }],
    feedback: ''
  }, {
    question: 'Which film was shot entirely in Tobago?',
    options: [{
      copy: 'Swiss Family Robinson',
      correct: true
    }, {
      copy: 'Castaway',
      correct: false
    }, {
      copy: 'Robinson Crusoe',
      correct: false
    }],
    feedback: ''
  }, {
    question: 'The Nylon Pool, a shallow white ground coral pool off Pigeon Point is rumoured to be named after a member of the royal family who said the water was as clear as her nylon stockings. But which royal?',
    options: [{
      copy: 'Princess Beatrice',
      correct: false
    }, {
      copy: 'Princess Eugenie',
      correct: false
    }, {
      copy: 'Princess Margaret ',
      correct: true
    }],
    feedback: ''
  }],
  outcome: [{
    title: 'Must try harder',
    explanation: '0 out of 6  The bad news is you’re not very good at Tobago quizzes. The good news is there’s a very easy way to make sure you ace the next one. Read our inspirational Tobago supplement.'
  }, {
    title: 'Must try harder',
    explanation: '1 out of 6  There’s certainly room for improvement but let’s look on the bright side – you didn’t score 0. You do have much to learn about a seriously impressive island so make sure you read all about it.'
  }, {
    title: 'Must try harder',
    explanation: '2 out of 6  Not bad but not brilliant either. You know a little bit about Tobago but could do with a serious refresher course. It’s probably worth considering jumping on a plane over there immediately.'
  }, {
    title: 'Not bad',
    explanation: '3 out of 6  A respectable score but nothing to show off about on your social media channels. If you want to ensure a perfect score next time you’ll need to get revising. Take a look at our guide to everything Tobago to help.'
  }, {
    title: 'Not bad',
    explanation: '4 out of 6   This score deserves a well done. Not a huge congratulations but certainly a gentle pat on the back. You seem to know a fair amount about the island but could improve with the help of this inspirational guide to Tobago.'
  }, {
    title: 'Excellent work',
    explanation: '5 out of 6  A great score but frustratingly close to perfection. You are a Tobago master but agonisingly short of being a grand master. Not quite ready for Tobago to be your specialist subject on a television quiz show. You get the idea. We’re impressed, though. If you want to achieve perfection next time, this guide will certainly help.'
  }, {
    title: 'Excellent work',
    explanation: '6 out 6  What can we say? Other than bravo. You are either from Tobago or know the place very well indeed. In which case you’re already fully aware of what an amazing island it is. Still, if you want to start planning your next trip, this guide is well worth a look.'
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

var _createQuestion = __webpack_require__(2);

var _createQuestion2 = _interopRequireDefault(_createQuestion);

var _createQuestionType = __webpack_require__(5);

var _createQuestionType2 = _interopRequireDefault(_createQuestionType);

var _createSubmitButton = __webpack_require__(6);

var _createSubmitButton2 = _interopRequireDefault(_createSubmitButton);

__webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initQuiz = function initQuiz() {
  /* ---------------------------------------------------------------
  * Creating the div tag to wrapping the quiz
  * ---------------------------------------------------------------- */
  var quizWidth = _questions2.default.fullWidth ? 'full-width' : 'article-width';
  var mainWrapper = '<div class="quiz-wrap ' + quizWidth + '" id="quizApp"></div>';
  document.write(mainWrapper);

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

var _createOptions = __webpack_require__(3);

var _createOptions2 = _interopRequireDefault(_createOptions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createQuestion = function createQuestion(item, index) {
  var wrapper = document.getElementById('quizApp'); // Main wrapper
  var questionNumber = index + 1;

  // Template
  var markup = '\n    <!-- Question Header -->\n    <div class="quiz-question-header">\n      <div class="quiz-question-number">\n        Q. ' + questionNumber + '\n      </div>\n      <div class="quiz-question-text">\n        <p>' + item.question + '</p>\n      </div>\n    </div>\n    <!--// Question Header -->\n    <!-- Question Options -->\n    <div class="quiz-question-options">\n      <ol>\n      </ol>\n    </div>\n    <!--// Question Options -->';

  // Creating a block per question
  var block = document.createElement('div');
  block.className = 'quiz-question-block';
  block.innerHTML = markup;

  // We get the OL reference
  var list = block.querySelector('ol');

  // Answers
  var options = (0, _createOptions2.default)(item.options);

  // Appending answers
  options.map(function (option) {
    list.appendChild(option);
  });

  // If there is feedback
  if (item.feedback.length) {
    // Div
    var feedbackDiv = document.createElement('div');
    feedbackDiv.className = 'quiz-question-feedback';

    // Feedback text
    var feedbackTxt = document.createTextNode(item.feedback);
    feedbackDiv.appendChild(feedbackTxt);

    // Apending after list
    block.appendChild(feedbackDiv);
  }

  // Appending block to Main Wrapper
  wrapper.appendChild(block);
};

exports.default = createQuestion;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _selectAnswer = __webpack_require__(4);

var _selectAnswer2 = _interopRequireDefault(_selectAnswer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createOptions = function createOptions(optionsObj) {

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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _questions = __webpack_require__(0);

var _questions2 = _interopRequireDefault(_questions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var quizLength = _questions2.default.quiz.length;

var selectAnswer = function selectAnswer(e) {
  var answers = e.target.parentNode.children;
  var answersArr = [].slice.call(answers);
  var selected = e.target;
  var submitBtn = document.querySelector('#submitBtn');

  // Clear previous option
  answersArr.map(function (a) {
    if (a.className) {
      a.className = '';
    }
  });

  // Select Answers
  selected.className = 'selected';

  // Active submit button if all questions have been answered
  var questionsSelected = document.querySelectorAll('#quizApp li.selected').length;
  if (questionsSelected === quizLength) {
    submitBtn.removeAttribute('disabled');
    submitBtn.classList.add('active');
  }
};

exports.default = selectAnswer;

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

var createQuestionType = function createQuestionType() {
  var quiz = document.getElementById('quizApp'); // Quiz
  var listStyle = document.createElement('style'); // Creating <style> tag

  // Writing css rules
  listStyle.innerHTML = '\n    .quiz-question-options ol li:before {\n      content: counter(item, ' + (_questions2.default.optionsType || 'upper-alpha') + ')\n    }\n  ';

  // Appending <style> tag
  quiz.appendChild(listStyle);
};

exports.default = createQuestionType;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _checkAnswers = __webpack_require__(7);

var _checkAnswers2 = _interopRequireDefault(_checkAnswers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createSubmitButton = function createSubmitButton() {
  var wrapper = document.getElementById('quizApp');
  var button = document.createElement('input');
  button.setAttribute('type', 'submit');
  button.setAttribute('id', 'submitBtn');
  button.setAttribute('disabled', 'disabled');
  button.addEventListener('click', _checkAnswers2.default);
  wrapper.appendChild(button);
};

exports.default = createSubmitButton;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _questions = __webpack_require__(0);

var _questions2 = _interopRequireDefault(_questions);

var _showOutcome = __webpack_require__(8);

var _showOutcome2 = _interopRequireDefault(_showOutcome);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var checkAnswers = function checkAnswers() {
  var score = 0;
  var questions = document.querySelectorAll('.quiz-question-options'); // Node List
  var questionsArray = [].slice.call(questions); // Conver to array

  var submitBtn = document.querySelector('#submitBtn');
  var restartBtn = document.createElement('input');

  questionsArray.map(function (question, index) {
    var answers = _questions2.default.quiz[index].options;
    var options = question.querySelectorAll('li');

    answers.map(function (answer, index) {
      var isCorrect = answer.correct ? 'correct' : 'incorrect';

      if (answer.correct && options[index].className === 'selected') {
        score++;
      }
      options[index].classList.add(isCorrect);
    });
  });

  submitBtn.style.display = 'none';
  (0, _showOutcome2.default)(score, _questions2.default.quiz.length, _questions2.default.outcome[score]);
};

exports.default = checkAnswers;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _questions = __webpack_require__(0);

var _questions2 = _interopRequireDefault(_questions);

var _restartQuiz = __webpack_require__(9);

var _restartQuiz2 = _interopRequireDefault(_restartQuiz);

var _animatedScroll = __webpack_require__(10);

var _animatedScroll2 = _interopRequireDefault(_animatedScroll);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var showOutcome = function showOutcome(score, nQuestions, outcome) {
  var wrapper = document.getElementById('quizApp');
  var restartBtn = document.createElement('button');
  var quizOutcome = document.createElement('div');

  quizOutcome.setAttribute('class', 'quiz-outcome fade-in');
  restartBtn.setAttribute('type', 'button');
  restartBtn.setAttribute('id', 'restartBtn');
  restartBtn.innerHTML = 'Restart';

  var markup = '\n      <div class="score">\n        <h3>You scored</h3>\n        <div class="total-score">\n          ' + score + '/' + nQuestions + '\n        </div>\n      </div>\n\n      <div class="outcome">\n        <h3>' + outcome.title + '</h3>\n        <p>' + outcome.explanation + '</p>\n      </div>\n  ';

  quizOutcome.innerHTML = markup;
  var randomNum = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);

  if (_questions2.default.competiton_embed !== '') {
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
  }

  wrapper.appendChild(quizOutcome);
  wrapper.appendChild(restartBtn);

  // Scroll Animation
  var quizY = quizOutcome.getBoundingClientRect();
  (0, _animatedScroll2.default)(document.body, quizY.top, 500);

  restartBtn.addEventListener('click', _restartQuiz2.default);
};

exports.default = showOutcome;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(1);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var restartQuiz = function restartQuiz() {
  var quiz = document.getElementById('quizApp');
  quiz.parentNode.removeChild(quiz);

  (0, _index2.default)();
};

exports.default = restartQuiz;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(12);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(14)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./styles.css", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(undefined);
// imports


// module
exports.push([module.i, "#quizApp.full-width {\n  width: 100%; }\n\n#quizApp.article-width {\n  max-width: 560px; }\n\n.quiz-question-block {\n  counter-reset: item;\n  margin-bottom: 30px; }\n\n.quiz-question-header {\n  margin-bottom: 26px; }\n\n.quiz-question-number {\n  display: inline-block;\n  background: #008384;\n  color: #fff; }\n\n.quiz-question-number,\n.quiz-question-options ol li::before {\n  border: 1px solid #008384;\n  width: 50px;\n  height: 38px;\n  line-height: 42px;\n  text-align: center;\n  vertical-align: middle; }\n\n.quiz-question-text {\n  display: inline-block;\n  min-height: 42px;\n  vertical-align: middle;\n  margin-left: 10px;\n  width: calc(100% - 70px); }\n\n.quiz-question-options ol {\n  margin: 0;\n  padding: 0;\n  list-style: none; }\n\n.quiz-question-options ol li {\n  counter-increment: item;\n  margin-bottom: 14px;\n  cursor: pointer; }\n\n.quiz-question-options ol li:before {\n  margin-right: 10px;\n  /*content: counter(item, upper-alpha);*/\n  background: #fff;\n  color: #008384;\n  display: inline-block; }\n\n.quiz-question-options ol li:hover:before,\n.quiz-question-options ol li.selected:before {\n  background: #252525;\n  color: #fff;\n  border: 1px solid #252525; }\n\n.quiz-question-options ol li.correct:before {\n  background: #006022;\n  color: #fff; }\n\n.quiz-question-options ol li.correct {\n  color: #006022; }\n\n.quiz-question-options ol li.selected.incorrect {\n  text-decoration: line-through; }\n\n.quiz-separator {\n  margin: 18px auto;\n  display: block;\n  border: 0;\n  border-bottom: 1px solid #ccc; }\n\n#submitBtn {\n  background: #ddd;\n  color: #fff;\n  font-size: 18px;\n  border: 0;\n  padding: 10px 16px;\n  cursor: not-allowed; }\n\n#submitBtn.active {\n  background: #008384;\n  cursor: pointer; }\n\n#restartBtn {\n  color: #fff;\n  font-size: 18px;\n  border: 0;\n  padding: 10px 16px;\n  background: #008384;\n  cursor: pointer;\n  margin-top: 20px; }\n\n.quiz-outcome {\n  border: 2px solid #008384;\n  padding: 10px;\n  opacity: 0;\n  transition: all 2s ease-out 0s; }\n\n.quiz-outcome .score {\n  display: inline-block;\n  width: 200px;\n  text-align: center;\n  vertical-align: top; }\n\n.quiz-outcome .outcome {\n  display: inline-block;\n  width: 49%;\n  vertical-align: top; }\n\n.quiz-outcome h3 {\n  color: #008384;\n  font-size: 18px; }\n\n.quiz-outcome .total-score {\n  border-radius: 50%;\n  border: 1px solid #008384;\n  color: #008384;\n  font-size: 42px;\n  width: 124px;\n  height: 124px;\n  line-height: 124px;\n  display: block;\n  margin: 0 auto; }\n\n.quiz-competition {\n  border: 0;\n  width: 100%;\n  opacity: 0;\n  transition: all 1s ease-out 0s; }\n\n.fade-in {\n  opacity: 1; }\n", ""]);

// exports


/***/ }),
/* 13 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(15);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 15 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })
/******/ ]);