let questionNumber = 0;
let score = 0;

//generate a question form 
//Each question form will include a question, 5 answer options and score
//If there is no question left, generate the result
function generateQuestion () {
  if (questionNumber < data.length) {
    return `
    <div class="questions">
    <h2>${data[questionNumber].question}</h2>
    <form>
      <fieldset>
        <label class="answerOption">
          <input type="radio" value="${data[questionNumber].answers[0]}" name="answer" required>
          <span>${data[questionNumber].answers[0]}</span>
        </label>
        <label class="answerOption">
          <input type="radio" value="${data[questionNumber].answers[1]}" name="answer" required>
          <span>${data[questionNumber].answers[1]}</span>
        </label>
        <label class="answerOption">
          <input type="radio" value="${data[questionNumber].answers[2]}" name="answer" required>
          <span>${data[questionNumber].answers[2]}</span>
        </label>
        <label class="answerOption">
          <input type="radio" value="${data[questionNumber].answers[3]}" name="answer" required>
          <span>${data[questionNumber].answers[3]}</span>
        </label>
        <label class="answerOption">
          <input type="radio" value="${data[questionNumber].answers[4]}" name="answer" required>
          <span>${data[questionNumber].answers[4]}</span>
        </label>
        <button type="submit" class="submitButton">Submit</button>
      </fieldset>
      <ul>
        <li>Question: ${questionNumber+1}/10</li>
        <li>Score: ${score}</li>
      </ul>
    </form>
    </div>`;
} else {
    renderResults();
    restartQuiz();
  }
}

//increase question number
function increaseQuestionNumber () {
    questionNumber ++;
  $('.questionNumber').text(questionNumber+1);
}

//update test score
function updateScore () {
  score++;
}

//start quiz
//on the start page, if the start button is clicked, hide the start page
//display question answer form
function startQuiz () {
  $('.startPage').on('click', '.startButton', function (event) {
    $('.startPage').remove();
    changeLogo ();
    $('.questionAnswerForm').css('display', 'inline-block');
});
}

//change logo from start page to question page
function changeLogo () {
  $('.logo').replaceWith(`<img class="slogo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaYo61LUx_tdojg3a7m5-q3s-_SvSEEyb6e_UKU2bMC8wtXqPq" alt="test icon"/>`);
}

// render question 
function renderQuestion () {
  $('.questionAnswerForm').html(generateQuestion());
}

//check answer
//if answer is correct, display feedback for correct answer
//otherwise display feedback for incorrect answer
function checkAnswer () {
  $('form').on('submit', function (event) {
    event.preventDefault();
    let selected = $('input:checked');
    let answer = selected.val();
    let correctAnswer = `${data[questionNumber].correctAnswer}`;
    if (answer === correctAnswer) {
      answerIsCorrect();
    } else {
      answerIsIncorrect();
    }
  });
}

//display feedback for correct answer and update score
function answerIsCorrect () {
  feedbackForCorrect();
  updateScore();
}

//display feedback for incorrect answer
function answerIsIncorrect () {
  feedbackForIncorrect();
}

//display corect logo
//display answer explaination
function feedbackForCorrect () {
  let answerExplain=`${data[questionNumber].answerExplain}`;
  $('.questionAnswerForm').html(`<p class="feedback"><img src="https://icon-library.net/images/ok-icon/ok-icon-15.jpg" alt="correct logo"/><p><b>Correct!</b></p><p>${answerExplain}</p><button type=button class="nextButton">Next</button></div>`);
}

//display incorrect logo
//display correct answer and explaination
function feedbackForIncorrect () {
  let correctAnswer = `${data[questionNumber].correctAnswer}`;
  let answerExplain=`${data[questionNumber].answerExplain}`;
  $('.questionAnswerForm').html(`<p class="feedback"><img src="http://www.amazingpestcontrol.com/images/incorrect.jpg" alt="incorrect logo"/><p><b>Incorrect!</b></p><p></p>The correct answer is <span>"${correctAnswer}"</span></p><p>${answerExplain}</p><button type=button class="nextButton">Next</button></div>`);
}


//display result page
//give feedback for result with score >=7 and other results
function renderResults () {
  if (score >= 7) {
    $('.questionAnswerForm').html(`<div class="result"><h3>Excellent work!</h3><p>You got ${score} / 10</p> <button class="restartButton">Restart Quiz</button></div>`);
  } else {
    $('.questionAnswerForm').html(`<div class="result"><h3>Keep practice more questions</h3><p>You got ${score} / 10</p><button class="restartButton">Restart Quiz</button></div>`);
  }
}

//generate next question by increase question number, display question and check answer
function renderNextQuestion () {
  $('main').on('click', '.nextButton', function (event) {
    increaseQuestionNumber();
    renderQuestion();
    checkAnswer();
  });
}

//restart the quiz
function restartQuiz () {
  $('main').on('click', '.restartButton', function (event) {
    location.reload();
  });
}

//main function
function createQuiz () {
  startQuiz();
  renderQuestion();
  checkAnswer();
  renderNextQuestion();
}

$(createQuiz);
