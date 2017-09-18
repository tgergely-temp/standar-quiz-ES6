const quizConfig = {
  // Options Type: circle | disc | square | armenian | cjk-ideographic | decimal | decimal-leading-zero | georgian | hebrew | hiragana | hiragana-iroha | katakana | katakana-iroha | lower-alpha | lower-greek | lower-latin | lower-roman | upper-alpha | upper-greek | upper-latin | upper-roman | none | inherit
  optionsType: 'upper-alpha',
  fullWidth: false,
  competitonEmbedCode: '4bf93cf6-ee9a-42b5-824c-69133c37d80c',
  quiz: [{
      question: 'Which animals take part in the annual Easter Race Festival in Buccoo?',
      options: [{
          copy: 'Rabbits',
          correct: false
        },
        {
          copy: 'Goats',
          correct: true
        },
        {
          copy: 'Horses',
          correct: false
        }
      ],
      feedback: ''
    }, {
      question: 'Upon seeing Tobago for the first time Christopher Columbus described the island as ‘bella forma’ (beautifully formed). But in which year did this happen?',
      options: [{
          copy: '1498',
          correct: true
        },
        {
          copy: '1507',
          correct: false
        },
        {
          copy: '1513',
          correct: false
        }
      ],
      feedback: ''
    },
    {
      question: 'There is a massive piece of a particular type of coral off the coast of Tobago. But which part of the body is it named after?',
      options: [{
          copy: 'Leg',
          correct: false
        },
        {
          copy: 'Brain',
          correct: true
        },
        {
          copy: 'Kidney',
          correct: false
        }
      ],
      feedback: ''
    },
    {
      question: 'Main Ridge Forest Reserve is the oldest protected rainforest in the western hemisphere. But when did its protection begin?',
      options: [{
          copy: '1576',
          correct: false
        },
        {
          copy: '1676',
          correct: false
        },
        {
          copy: '1776',
          correct: true
        }
      ],
      feedback: ''
    },
    {
      question: 'Which film was shot entirely in Tobago?',
      options: [{
          copy: 'Swiss Family Robinson',
          correct: true
        },
        {
          copy: 'Castaway',
          correct: false
        },
        {
          copy: 'Robinson Crusoe',
          correct: false
        }
      ],
      feedback: ''
    },
    {
      question: 'The Nylon Pool, a shallow white ground coral pool off Pigeon Point is rumoured to be named after a member of the royal family who said the water was as clear as her nylon stockings. But which royal?',
      options: [{
          copy: 'Princess Beatrice',
          correct: false
        },
        {
          copy: 'Princess Eugenie',
          correct: false
        },
        {
          copy: 'Princess Margaret ',
          correct: true
        }
      ],
      feedback: ''
    }
  ],
  outcome: [
    {
      title: 'Must try harder',
      explanation: '<p>0 out of 6</p> <p>The bad news is you’re not very good at Tobago quizzes. The good news is there’s a very easy way to make sure you ace the next one. Read our inspirational Tobago supplement.</p>'
    },
    {
      title: 'Must try harder',
      explanation: '<p>1 out of 6</p> <p>There’s certainly room for improvement but let’s look on the bright side – you didn’t score 0. You do have much to learn about a seriously impressive island so make sure you read all about it.</p>'
    },
    {
      title: 'Must try harder',
      explanation: '<p>2 out of 6</p> <p>Not bad but not brilliant either. You know a little bit about Tobago but could do with a serious refresher course. It’s probably worth considering jumping on a plane over there immediately.</p>'
    },
    {
      title: 'Not bad',
      explanation: '<p>3 out of 6</p> <p>A respectable score but nothing to show off about on your social media channels. If you want to ensure a perfect score next time you’ll need to get revising. Take a look at our guide to everything Tobago to help.</p>',
    },
    {
      title: 'Not bad',
      explanation: '<p>4 out of 6</p> <p>This score deserves a well done. Not a huge congratulations but certainly a gentle pat on the back. You seem to know a fair amount about the island but could improve with the help of this inspirational guide to Tobago.</p>'
    },
    {
      title: 'Excellent work',
      explanation: '<p>5 out of 6</p> <p>A great score but frustratingly close to perfection. You are a Tobago master but agonisingly short of being a grand master. Not quite ready for Tobago to be your specialist subject on a television quiz show. You get the idea. We’re impressed, though. If you want to achieve perfection next time, this guide will certainly help.</p>'
    },
    {
      title: 'Excellent work',
      explanation: '<p>6 out 6</p> <p>What can we say? Other than bravo. You are either from Tobago or know the place very well indeed. In which case you’re already fully aware of what an amazing island it is. Still, if you want to start planning your next trip, this guide is well worth a look.</p>'
    }
  ]
};

export default quizConfig;
