const quizConfig = {
  // Options Type: circle | disc | square | armenian | cjk-ideographic | decimal | decimal-leading-zero | georgian | hebrew | hiragana | hiragana-iroha | katakana | katakana-iroha | lower-alpha | lower-greek | lower-latin | lower-roman | upper-alpha | upper-greek | upper-latin | upper-roman | none | inherit
  optionsType: 'upper-alpha',
  fullWidth: false,
  // competitonEmbedCode: '',
  quiz: [{
    question: 'The capital of St. Kitts is...',
    img: {
      src: './imgs/1.jpg',
      alt: 'capital',
    },
    options: [{
      copy: 'Basseterre',
      correct: true
    },
    {
      copy: 'Kingston',
      correct: false
    },
    {
      copy: 'Nassau',
      correct: false
    },
    {
      copy: 'Freetown',
      correct: false
    },
    {
      copy: 'Port Louis',
      correct: false
    },
    ],
    feedback: ''
  }, {
    question: 'The crater at the heart of St. Kitts\' tallest volcano, Mount Liamuiga, is known as...      ',
    img: {
      src: './imgs/2.jpg',
      alt: 'crater',
    },
    options: [{
      copy: 'God’s Washbasin',
      correct: true
    },
    {
      copy: 'The Devil’s Punchbowl',
      correct: false
    },
    {
      copy: 'Hamish’s Porridge Bowl',
      correct: false
    },
    {
      copy: 'Giant’s Salad Bowl',
      correct: false
    },
    {
      copy: 'Jolly Green Giant',
      correct: false
    },
    ],
    feedback: ''
  },
  {
    question: 'How many beaches does St. Kitts have?',
    img: {
      src: './imgs/3.jpg',
      alt: 'beaches',
    },
    options: [{
      copy: 'Seven',
      correct: false
    },
    {
      copy: '15',
      correct: true
    },
    {
      copy: '43',
      correct: false
    },
    {
      copy: 'Just the one',
      correct: false
    },
    {
      copy: 'None',
      correct: false
    }
    ],
    feedback: ''
  },
  {
    question: 'People who live in St. Kitts are called...',
    img: {
      src: './imgs/4.jpg',
      alt: 'people',
    },
    options: [{
      copy: 'Kittens',
      correct: false
    },
    {
      copy: 'Saints',
      correct: false
    },
    {
      copy: 'Apostles',
      correct: false
    },
    {
      copy: 'Kittitians',
      correct: true
    },
    {
      copy: 'Hello Kitty',
      correct: false
    }
    ],
    feedback: ''
  },
  {
    question: 'The official language of St. Kitts is...',
    img: {
      src: './imgs/5.jpg',
      alt: 'language',
    },
    options: [{
      copy: 'English',
      correct: false
    },
    {
      copy: 'Spanish',
      correct: true
    },
    {
      copy: 'St. Kitts Creole',
      correct: false
    },
    {
      copy: 'Dutch',
      correct: false
    },
    {
      copy: 'Japanese',
      correct: false
    }
    ],
    feedback: ''
  },
  {
    question: 'The sister island of St. Kitts is called...',
    img: {
      src: './imgs/6.jpg',
      alt: 'sister',
    },
    options: [{
      copy: 'Montserrat',
      correct: false
    },
    {
      copy: 'Jamaica',
      correct: false
    },
    {
      copy: 'Nevis',
      correct: true
    },
    {
      copy: 'Aruba',
      correct: false
    },
    {
      copy: 'Eel Pie Island',
      correct: false
    }
    ],
    feedback: ''
  },
  {
    question: 'If somebody offers you goat water, should you...',
    img: {
      src: './imgs/7.jpg',
      alt: 'goat water',
    },
    options: [{
      copy: 'Tell them you’re not thirsty',
      correct: false
    },
    {
      copy: 'Say you prefer cow’s milk',
      correct: false
    },
    {
      copy: 'Mix it with slimline tonic',
      correct: true
    },
    {
      copy: 'Bring some shampoo and conditioner',
      correct: false
    },
    {
      copy: 'Say yum and dig in to delicious homemade stew',
      correct: false
    }
    ],
    feedback: ''
  }
  ],
  outcome: [
    {
      title: 'Oh dear, you need to lie down in the shade…',
      explanation: 'Come to restful St. Kitts for your much-needed holiday. ',
      img: {
        src: './imgs/answers/1.jpg',
        alt: 'Oh dear',
      }
    },
    {
      title: 'Oh dear, you need to lie down in the shade…',
      explanation: 'Come to restful St. Kitts for your much-needed holiday. ',
      img: {
        src: './imgs/answers/1.jpg',
        alt: 'Oh dear',
      }
    },
    {
      title: 'Oh dear, you need to lie down in the shade…',
      explanation: 'Come to restful St. Kitts for your much-needed holiday. ',
      img: {
        src: './imgs/answers/1.jpg',
        alt: 'Oh dear',
      }
    },
    {
      title: 'Oh dear, you need to lie down in the shade…',
      explanation: 'Come to restful St. Kitts for your much-needed holiday. ',
      img: {
        src: './imgs/answers/1.jpg',
        alt: 'Oh dear',
      }
    },
    {
      title: 'Hey, that’s not bad at all.',
      explanation: 'There’s nothing like a holiday in St. Kitts to brush up on your local knowledge',
      img: {
        src: './imgs/answers/2.jpg',
        alt: 'not bad',
      }
    },
    {
      title: 'Hey, that’s not bad at all.',
      explanation: 'There’s nothing like a holiday in St. Kitts to brush up on your local knowledge',
      img: {
        src: './imgs/answers/2.jpg',
        alt: 'not bad',
      }
    },
    {
      title: 'Hey, that’s not bad at all.',
      explanation: 'There’s nothing like a holiday in St. Kitts to brush up on your local knowledge',
      img: {
        src: './imgs/answers/2.jpg',
        alt: 'not bad',
      }
    },
    {
      title: 'Great score, you’re a true Kittitian!',
      explanation: 'There’s always more to discover in St. Kitts',
      img: {
        src: './imgs/answers/3.jpg',
        alt: 'Great',
      }
    },
  ]
};

export default quizConfig;
