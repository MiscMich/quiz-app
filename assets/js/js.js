const questions = [
  {
    question: "Arrays in Javascript can be used to store?",
    choices: ["1. Other arrays", "2. Html", "3. CSS", "4. Javascript"],
    answer: "1. Other arrays",
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
    question: "Question 2",
    choices: ["1. Other arrays", "2. Html", "3. CSS", "4. Javascript"],
    answer: "1. Other Arrays",
  },
  {
    question: "Question 3",
    choices: ["1. Other arrays", "2. Html", "3. CSS", "4. Javascript"],
    answer: "1. Other Arrays",
  },
  {
    question: "Question 4",
    choices: ["1. Other arrays", "2. Html", "3. CSS", "4. Javascript"],
    answer: "1. Other Arrays",
  },
];

 var scoresArray = [];
  var userInputDiv =  document.getElementById("highscore-initial-input")
var correctAnswers=0;
var wrongAnswers=0;
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
        totalTime = 0; // clear
        gameOver()
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



document.getElementById("btn0").addEventListener("click", checkAnswer);
document.getElementById("btn1").addEventListener("click", checkAnswer);
document.getElementById("btn2").addEventListener("click", checkAnswer);
document.getElementById("btn3").addEventListener("click", checkAnswer);




function checkAnswer(event) {
  if (event.target.textContent === questions[questionIndex].answer) {
    
    document.getElementById('right-or-wrong').classList.add("text-success")
     
    document.getElementById('right-or-wrong').innerHTML = "That answer was correct!"
    correctAnswers++
    


    
    //playerScore.textContent = ("Score: " + userScorePoints);
    console.log("correct answer");

  } else {

    totalTime = totalTime - 10;
    document.getElementById('right-or-wrong').classList.add("text-danger")

    console.log("wrong answer");
    console.log(event.target.textContent + " "  + questions[questionIndex].answer)
    document.getElementById('right-or-wrong').innerHTML = ("Wrong! The correct answer was: " + questions[questionIndex].answer + ".")
    wrongAnswers++
  
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

function gameOver(event) {

  totalTime = 1
  document.getElementById('time').innerHTML = '0'
  questionsDiv.style.display = "none"
  console.log("Game is over, you got this amount of correct answers: " + correctAnswers )
  codingQuizHeading.innerHTML = "Game Over! Your score is " + correctAnswers
  userInputDiv.style.display = "block"
  
  

  

}




function grabHighScore(){


    document.getElementById('heading').style.display = "none"

 

  
    var userInitials = document.getElementById('user-initials').value;
    
    console.log("users value is: " + userInitials);


  userInputDiv.style.display = "none"
  questionsDiv.style.display = "none"
  codingQuizHeading.innerHTML = "Game Over! Your score is " + correctAnswers
  document.getElementById("highscores-user-list").style.display = "block"
  //var highscore = localStorage.getItem("highscore");
  

   var result = {
    initials: userInitials,
    score: correctAnswers
  }

  const savedScores = localStorage.getItem('highscore') || '[]' // get the score, or the initial value if empty
 
  const highscores = [...JSON.parse(savedScores), result] // add the result
  .sort((a, b) => b.score- a.score) // sort descending
  .slice(0, 10) // take highest 5

localStorage.setItem('highscore', JSON.stringify(highscores)) // store the scores

console.log(highscores)
 
  
  
  console.log(scoresArray)

  for (let i = 0; i < highscores.length; i++) {
    console.log(highscores[i])
    var ul = document.getElementById("highscores-user-list")
    var li = document.createElement("li");
    li.setAttribute("class", "list-group-item")
     li.appendChild(document.createTextNode(highscores[i].initials + ".   Score: " +highscores[i].score))
     ul.appendChild(li);
  }
  
  

}


function viewHighscores() {
 


}



function viewHighScores () {
  
  
  totalTime = 1
  document.getElementById('time').innerHTML = '0'
  questionsDiv.style.display = "none"

  
  

  

}

function refresh() {    
  setTimeout(function () {
      location.reload()
  }, 100);
}

document.getElementById("view-highscores").addEventListener("click", grabHighScore)
document.getElementById("play-again").addEventListener("click", refresh )
 document.getElementById("submit-initials").addEventListener('click', grabHighScore)


