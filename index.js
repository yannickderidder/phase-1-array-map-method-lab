const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];



const titleCased = () => {
  const tutorials = [];
  for (let i = 0; i < tutorials.length; i++) {
    tutorials[i] = tutorials[i].charAt(0).toUpperCase() + tutorials[i].slice(1);
  }
  return tutorials
}

const tutorialList = titleCased.toUpperCase(); 