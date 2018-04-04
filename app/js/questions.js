const STATICPATH = process.env.STATICPATH;

const quizConfig = {
  // Options Type: circle | disc | square | armenian | cjk-ideographic | decimal | decimal-leading-zero | georgian | hebrew | hiragana | hiragana-iroha | katakana | katakana-iroha | lower-alpha | lower-greek | lower-latin | lower-roman | upper-alpha | upper-greek | upper-latin | upper-roman | none | inherit
  optionsType: 'upper-alpha',
  fullWidth: false,
  // competitonEmbedCode: '',
  quiz: [{
    question: 'How many “Earthrises” can astronauts on board the International Space Station witness in 24 hours?',
    img: {
      src: `${STATICPATH}imgs/1.jpg`,
      alt: 'capital',
    },
    options: [{
      copy: 'One',
      correct: false
    },
    {
      copy: '16',
      correct: true
    },
    {
      copy: '32',
      correct: false
    }],
    feedback: ''
  }, {
    question: 'What festival coincides with the migratory movements of this beautiful creature?',
    img: {
      src: `${STATICPATH}imgs/2.jpg`,
      alt: 'crater',
    },
    options: [{
      copy: 'Monarch Festival (Minneapolis, US)',
      correct: false
    },
    {
      copy: 'Mariposa Butterfly Festival (California, US)',
      correct: false
    },
    {
      copy: 'The Day of the Dead (Mexico)',
      correct: true
    }],
    feedback: ''
  },
  {
    question: 'What is the smallest microbe on the planet?',
    img: {
      src: `${STATICPATH}imgs/3.jpg`,
      alt: 'beaches',
    },
    options: [{
      copy: 'A virus',
      correct: true
    },
    {
      copy: 'A cell',
      correct: false
    },
    {
      copy: 'A bacterium',
      correct: false
    }],
    feedback: ''
  },
  {
    question: 'How deep into Earth’s core have humans explored?',
    img: {
      src: `${STATICPATH}imgs/4.jpg`,
      alt: 'people',
    },
    options: [{
      copy: '12,380m',
      correct: true
    },
    {
      copy: '1,238m',
      correct: false
    },
    {
      copy: '124m',
      correct: false
    }],
    feedback: ''
  },
  {
    question: 'What is the fastest creature in the animal kingdom?',
    img: {
      src: `${STATICPATH}imgs/5.jpg`,
      alt: 'language',
    },
    options: [{
      copy: 'Cheetah',
      correct: false
    },
    {
      copy: 'Sailfish',
      correct: false
    },
    {
      copy: 'Brazilian free-tailed bat',
      correct: true
    }],
    feedback: ''
  },
  {
    question: 'What is the oldest fossil ever discovered to date?',
    img: {
      src: `${STATICPATH}imgs/6.jpg`,
      alt: 'sister',
    },
    options: [{
      copy: 'Part of a dinosaur',
      correct: false
    },
    {
      copy: 'Bacteria',
      correct: true
    },
    {
      copy: 'A tree',
      correct: false
    }],
    feedback: ''
  },
  {
    question: 'Roughly how many species are in existence on planet Earth today?',
    img: {
      src: `${STATICPATH}imgs/7.jpg`,
      alt: 'goat water',
    },
    options: [{
      copy: '1.5 million',
      correct: false
    },
    {
      copy: '162 million',
      correct: false
    },
    {
      copy: '1-6 billion',
      correct: true
    }],
    feedback: ''
  },
  {
    question: 'What’s the largest living organism on Earth?',
    img: {
      src: `${STATICPATH}imgs/8.jpg`,
      alt: 'goat water',
    },
    options: [{
      copy: 'Great Barrier Reef',
      correct: false
    },
    {
      copy: 'Honey fungus',
      correct: true
    },
    {
      copy: 'Blue whale',
      correct: false
    }],
    feedback: ''
  },
  {
    question: 'If you untwisted all the DNA in all the cells of the human body, how far would it stretch end to end?',
    img: {
      src: `${STATICPATH}imgs/9.jpg`,
      alt: 'DNA',
    },
    options: [{
      copy: '9.3 trillion miles',
      correct: true
    },
    {
      copy: '9,300 miles',
      correct: false
    },
    {
      copy: '9.3ft',
      correct: false
    }],
    feedback: ''
  },
  {
    question: 'Arguably what is the most important factor that sets humans apart from other animals?',
    img: {
      src: `${STATICPATH}imgs/10.jpg`,
      alt: 'Day of the Dead',
    },
    options: [{
      copy: 'A backbone',
      correct: false
    },
    {
      copy: 'The ability to use tools',
      correct: false
    },
    {
      copy: 'Consciousness',
      correct: true
    }],
    feedback: ''
  }
  ],
  outcome: [
    {
      title: 'Alien invader',
      explanation: 'Oh dear. Perhaps you’re visiting from another planet? Never mind: hopefully you’ve discovered some facts that surprised you and made you appreciate what an incredibly special planet we inhabit. One thing’s for sure, though: One Strange Rock is going to blow your mind. ',
      grab: 'Tune in at 9pm on 27 March on National Geographic or visit <a href="//tgr.ph/onestrangerock" target="_blank" rel="nofollow noopener noreferrer">tgr.ph/onestrangerock</a> to discover more',
    },
    {
      title: 'Alien invader',
      explanation: 'Oh dear. Perhaps you’re visiting from another planet? Never mind: hopefully you’ve discovered some facts that surprised you and made you appreciate what an incredibly special planet we inhabit. One thing’s for sure, though: One Strange Rock is going to blow your mind. ',
      grab: 'Tune in at 9pm on 27 March on National Geographic or visit <a href="//tgr.ph/onestrangerock" target="_blank" rel="nofollow noopener noreferrer">tgr.ph/onestrangerock</a> to discover more',
    },
    {
      title: 'Alien invader',
      explanation: 'Oh dear. Perhaps you’re visiting from another planet? Never mind: hopefully you’ve discovered some facts that surprised you and made you appreciate what an incredibly special planet we inhabit. One thing’s for sure, though: One Strange Rock is going to blow your mind. ',
      grab: 'Tune in at 9pm on 27 March on National Geographic or visit <a href="//tgr.ph/onestrangerock" target="_blank" rel="nofollow noopener noreferrer">tgr.ph/onestrangerock</a> to discover more',
    },
    {
      title: 'Alien invader',
      explanation: 'Oh dear. Perhaps you’re visiting from another planet? Never mind: hopefully you’ve discovered some facts that surprised you and made you appreciate what an incredibly special planet we inhabit. One thing’s for sure, though: One Strange Rock is going to blow your mind. ',
      grab: 'Tune in at 9pm on 27 March on National Geographic or visit <a href="//tgr.ph/onestrangerock" target="_blank" rel="nofollow noopener noreferrer">tgr.ph/onestrangerock</a> to discover more',
    },
    {
      title: 'Wannabe Einstein',
      explanation: 'You are well on the way to attaining honorary nerd status! Hopefully along the way you’ve also learnt a few more facts about this astonishing planet that we inhabit. What’s more, if you watch One Strange Rock you’ll open your mind to other branches of science that may have passed you by.',
      grab: 'Tune in at 9pm on 27 March on National Geographic or visit <a href="//tgr.ph/onestrangerock" target="_blank" rel="nofollow noopener noreferrer">tgr.ph/onestrangerock</a> to discover more',
    },
    {
      title: 'Wannabe Einstein',
      explanation: 'You are well on the way to attaining honorary nerd status! Hopefully along the way you’ve also learnt a few more facts about this astonishing planet that we inhabit. What’s more, if you watch One Strange Rock you’ll open your mind to other branches of science that may have passed you by.',
      grab: 'Tune in at 9pm on 27 March on National Geographic or visit <a href="//tgr.ph/onestrangerock" target="_blank" rel="nofollow noopener noreferrer">tgr.ph/onestrangerock</a> to discover more',
    },
    {
      title: 'Wannabe Einstein',
      explanation: 'You are well on the way to attaining honorary nerd status! Hopefully along the way you’ve also learnt a few more facts about this astonishing planet that we inhabit. What’s more, if you watch One Strange Rock you’ll open your mind to other branches of science that may have passed you by.',
      grab: 'Tune in at 9pm on 27 March on National Geographic or visit <a href="//tgr.ph/onestrangerock" target="_blank" rel="nofollow noopener noreferrer">tgr.ph/onestrangerock</a> to discover more',
    },
    {
      title: 'Science genius',
      explanation: 'You are officially a science guru! Whether they were intelligent guesses or dead certs, you can be proud of your score – and hopefully you discovered the odd fact you didn’t know about planet Earth. Why not supplement your knowledge by watching One Strange Rock? You’re bound to be amazed by the scope of the series.',
      grab: 'Tune in at 9pm on 27 March on National Geographic or visit <a href="//tgr.ph/onestrangerock" target="_blank" rel="nofollow noopener noreferrer">tgr.ph/onestrangerock</a> to discover more',
    },
    {
      title: 'Science genius',
      explanation: 'You are officially a science guru! Whether they were intelligent guesses or dead certs, you can be proud of your score – and hopefully you discovered the odd fact you didn’t know about planet Earth. Why not supplement your knowledge by watching One Strange Rock? You’re bound to be amazed by the scope of the series.',
      grab: 'Tune in at 9pm on 27 March on National Geographic or visit <a href="//tgr.ph/onestrangerock" target="_blank" rel="nofollow noopener noreferrer">tgr.ph/onestrangerock</a> to discover more',
    },
    {
      title: 'Science genius',
      explanation: 'You are officially a science guru! Whether they were intelligent guesses or dead certs, you can be proud of your score – and hopefully you discovered the odd fact you didn’t know about planet Earth. Why not supplement your knowledge by watching One Strange Rock? You’re bound to be amazed by the scope of the series.',
      grab: 'Tune in at 9pm on 27 March on National Geographic or visit <a href="//tgr.ph/onestrangerock" target="_blank" rel="nofollow noopener noreferrer">tgr.ph/onestrangerock</a> to discover more',
    },
    {
      title: 'Science genius',
      explanation: 'You are officially a science guru! Whether they were intelligent guesses or dead certs, you can be proud of your score – and hopefully you discovered the odd fact you didn’t know about planet Earth. Why not supplement your knowledge by watching One Strange Rock? You’re bound to be amazed by the scope of the series.',
      grab: 'Tune in at 9pm on 27 March on National Geographic or visit <a href="//tgr.ph/onestrangerock" target="_blank" rel="nofollow noopener noreferrer">tgr.ph/onestrangerock</a> to discover more',
    },
  ]
};

export default quizConfig;
