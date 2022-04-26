const questions = [
  {
    question: "Arrays in Javascript can be used to store?",
    choices: ["1. Other arrays", "2. Html", "3. CSS", "4. Javascript"],
    answer: "1. Other Arrays",
  },
  {
    question: "A very useful tool for planning and debugging your code is ____",
    choices: [
      "1. Chrome Developer Tools",
      "2. Html",
      "3. Arrays",
      "4. Node.js",
    ],
    answer: "1. Chrome Developer Tools",
  },
  {
    question: "Arrays in Javascript can be used to store?",
    choices: ["1. Other arrays", "2. Html", "3. CSS", "4. Javascript"],
    answer: "1. Other Arrays",
  },
  {
    question: "Arrays in Javascript can be used to store?",
    choices: ["1. Other arrays", "2. Html", "3. CSS", "4. Javascript"],
    answer: "1. Other Arrays",
  },
  {
    question: "Arrays in Javascript can be used to store?",
    choices: ["1. Other arrays", "2. Html", "3. CSS", "4. Javascript"],
    answer: "1. Other Arrays",
  },
];

var questionTitle = document.getElementById("questionTitle");
var questionDiv = document.getElementById("questionDiv");
var choiceA = document.getElementById("btn0");
var choiceB = document.getElementById("btn1");
var choiceC = document.getElementById("btn2");
var choiceD = document.getElementById("btn3");

var codingQuizHeading = document.getElementById("coding-quiz");
var questionIndex = 0;
var totalTime = 0;

var startGameButton = document.getElementById("start-game");
var startDiv = document.getElementById("heading");

startGameButton.addEventListener("click", startGame);

function startGame() {
  totalTime = 60;
  questionsDiv.style.display = "block";
  lineBreak.style.display = "block";
  answerCheck.style.display = "block";
  showQuiz();

  console.log("Starting game");

  startGameButton.style.display = "none";
  heading.style.display = "none";
  codingQuizHeading.style.display = "none";

  totalTime = time.textContent;

  console.log("starting timer");
  var startTimer = setInterval(function () {
    totalTime--;
    time.textContent = totalTime;
    if (totalTime <= 0) {
      clearInterval(startTimer);
      if (questionIndex < questions.length - 1) {
      }
    }
  }, 1000);
}

function showQuiz() {
  nextQuestion();
}

function nextQuestion() {
  questionTitle.textContent = questions[questionIndex].question;
  choiceA.textContent = questions[questionIndex].choices[0];
  choiceB.textContent = questions[questionIndex].choices[1];
  choiceC.textContent = questions[questionIndex].choices[2];
  choiceD.textContent = questions[questionIndex].choices[3];
  
}

function checkAnswer(event) {
  if (event.target.textContent === questions[questionIndex].answer) {
    //playerScore.textContent = ("Score: " + userScorePoints);
    console.log("correct answer");
  } else {
    
  }

  questionIndex++;

  // add another question
  if (questionIndex < questions.length) {
    // questionCountIndex++;
    nextQuestion();
  } else {
    gameOver();
  }
}
