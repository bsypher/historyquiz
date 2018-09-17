(function() {
  const myQuestions = [
    {
      question: "Who was the last Tsar of Russia?",
      answers: {
        a: "Ivan IV",
        b: "Peter the Great",
        c: "Nicholas II"
      },
      correctAnswer: "c"
    },
    {
      question: "Who founded Turkey?",
      answers: {
        a: "Mehmed II",
        b: "Burak Yilmaz Pasha",
        c: "Mustafa Kemal"
      },
      correctAnswer: "c"
    },
    {
      question: "Which of the following was not a Canadian Prime Minister?",
      answers: {
        a: "Joe Clark",
        b: "John Turner",
        c: "John Diefenbaker",
        d: "Stubby Clapp"
      },
      correctAnswer: "d"
    },
    {
    question: "Who won the battle of Midway?",
      answers: {
        a: "Japan",
        b: "Australia",
        c: "United States",
        d: "Thailand"
      },
      correctAnswer: "c"
    },
    {
    question: "What is the present day name of Stalingrad?",
      answers: {
        a: "Astana",
        b: "Volgogrod",
        c: "Rostov",
        d: "Donestk"
      },
      correctAnswer: "b"
    },
    {
    question: "Finland defeated this country during the Winter War?",
      answers: {
        a: "Sweden",
        b: "Soviet Union",
        c: "Sweden",
        d: "Germany"
      },
      correctAnswer: "b"
    },
    {
    question: "Who won the battle of Midway?",
      answers: {
        a: "Japan",
        b: "Australia",
        c: "United States",
        d: "Thailand"
      },
      correctAnswer: "c"
    },
    {
    question: "Who won the battle of Midway?",
      answers: {
        a: "Japan",
        b: "Australia",
        c: "United States",
        d: "Thailand"
      },
      correctAnswer: "c"
    },
    {
    question: "Japan once included part of which island?",
      answers: {
        a: "Sakhalin",
        b: "Australia",
        c: "New Zealand",
        d: "Yurkazi"
      },
      correctAnswer: "a"
    },
    {
    question: "A pope has not come from which country?",
      answers: {
        a: "Poland",
        b: "Russia",
        c: "Italy",
        d: "Germany"
      },
      correctAnswer: "c"
    },
  ];

  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
             <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
           </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="slide">
           <div class="question"> ${currentQuestion.question} </div>
           <div class="answers"> ${answers.join("")} </div>
         </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  function showSlide(n) {
    slides[currentSlide].classList.remove("active-slide");
    slides[n].classList.add("active-slide");
    currentSlide = n;
    
    if (currentSlide === 0) {
      previousButton.style.display = "none";
    } else {
      previousButton.style.display = "inline-block";
    }
    
    if (currentSlide === slides.length - 1) {
      nextButton.style.display = "none";
      submitButton.style.display = "inline-block";
    } else {
      nextButton.style.display = "inline-block";
      submitButton.style.display = "none";
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");

  // display quiz right away
  buildQuiz();

  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  showSlide(0);

  // on submit, show results
  submitButton.addEventListener("click", showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
})();
