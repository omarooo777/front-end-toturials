let questionContainer = document.querySelector(".quiz-box");
let questionCount = document.querySelector(".quiz-box .questions-count span");
let bulletsContainer = document.querySelector(".quiz-box .bullets");
let questionArea = document.querySelector(".quiz-box .question-area");
let answerArea = document.querySelector(".quiz-box .answer-area");
let controls = document.querySelector(".controls");
let timer = document.querySelector(".timer");
let next = document.querySelector(".next");
let resultsContainer = document.querySelector(".result");

let currentIndex = 0;
let rightAnswers = 0;
let intervalCount;
question();

function question() {
  fetch("html-questions.json")
    .then((test) => test.json())
    .then((questions) => {
      createBullets(questions.length);
      questionData(questions[currentIndex], questions.length);
      countDown(90, questions.length);
      next.onclick = function () {
        let rightAnswer = questions[currentIndex].right_answer;
        currentIndex++;

        checkAnswer(rightAnswer);
        questionArea.innerHTML = "";
        answerArea.innerHTML = "";
        questionData(questions[currentIndex], questions.length);
        handelBullets();
        clearInterval(intervalCount);
        countDown(90, questions.length);
        showResults(questions.length);
      };
    });
}

function createBullets(num) {
  questionCount.innerHTML = num;
  for (let i = 0; i < num; i++) {
    let bullet = document.createElement("span");
    bulletsContainer.appendChild(bullet);
    if (i == 0) {
      bullet.classList.add("on");
    }
  }
}

const uniqueValues = new Set();

function uV(limit, totalValues) {
  do { uniqueValues.add(Number((Math.random() * limit).toFixed()))  }
    while ( uniqueValues.size < totalValues)

  return Array.from(uniqueValues);
}

uV(3, 4)
let z = Array.from(uniqueValues).map((e) => e + 1)
console.log(z);

function questionData(object, count) {
  if (currentIndex < count) {
    let questionTitle = document.createElement("h3");
    questionTitle.appendChild(document.createTextNode(object.title));
    questionArea.appendChild(questionTitle);

    for (let i = 1; i <= 4; i++) {
      let answerDiv = document.createElement("div");
      let input = document.createElement("input");
      input.type = "radio";
      input.name = "answers";
      input.id = `answer_${i}`;
      input.dataset.ans = object[`answer_${z[i-1]}`];
      answerDiv.appendChild(input);

      let lable = document.createElement("label");
      lable.setAttribute("for", `answer_${i}`);

      lable.appendChild(document.createTextNode(object[`answer_${z[i-1]}`]));
      answerDiv.appendChild(lable);

      answerArea.appendChild(answerDiv);
    }
  }
}

function checkAnswer(rAns) {
  let answers = document.getElementsByName("answers");
  let choosenAns;

  for (let i = 0; i < answers.length; i++) {
    if (answers[i].checked) {
      choosenAns = answers[i].dataset.ans;
    }
  }
  if (choosenAns === rAns) {
    rightAnswers++;
  }
}

function handelBullets() {
  let bullets = Array.from(bulletsContainer.children);
  bullets.forEach((span, i) => {
    if (currentIndex == i) {
      span.className = "on";
    }
  });
}

function showResults(count) {
  if (count == currentIndex) {
    questionArea.remove();
    answerArea.remove();
    controls.remove();
    bulletsContainer.remove();

    if (rightAnswers == count) {
      resultsContainer.innerHTML = `<span class="app"><span class="perfect">Perfect</span> All Answers Is Right</span>`;
    } else if (rightAnswers > count / 2 && rightAnswers < count) {
      resultsContainer.innerHTML = `<span class="app"><span class="good">Good</span> You Answerd ${rightAnswers} From ${count}</span>`;
    } else {
      resultsContainer.innerHTML = `<span class="app"><span class="bad">Bad</span> You Answerd ${rightAnswers} From ${count}</span>`;
    }
  }
}

function countDown(duration, count) {
  if (currentIndex < count) {
    intervalCount = setInterval(() => {
      let minutes = parseInt(duration / 60);
      let seconds = parseInt(duration % 60);
      minutes = minutes < 10 ? `0${minutes}` : minutes;
      seconds = seconds < 10 ? `0${seconds}` : seconds;
      timer.innerHTML = `${minutes}:${seconds}`;
      if (--duration < 0) {
        clearInterval(intervalCount);
        next.click();
      }
    }, 1000);
  }
}
