const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

function buildQuiz(){}

function showResults(){}

// display quiz right away
buildQuiz();

// on submit, show results
submitButton.addEventListener('click', showResults);

const myQuestions = [
  {
    question: "What is the capital of Italy",
    answers: {
      a: "Rome",
      b: "Spain",
      c: "Naples"
    },
    correctAnswer: "a"
  },
  {
    question: "What is the capital of Germany?",
    answers: {
      a: "Berlin",
      b: "Oslo",
      c: "London"
    },
    correctAnswer: "a"
  },
  {
    question: "Who founded Turkey",
    answers: {
      a: "Mesut Ozil",
      b: "Mustafa Kemal",
      c: "Ozguhan Mehmetoglou",
      d: "John Stamos"
    },
    correctAnswer: "b"
  }
  {
    question: "Who won the Battle of Midway",
    answers: {
      a: "Japan",
      b: "Taiwan",
      c: "Canada",
      d: "United States"
    },
    correctAnswer: "d"
  }
];