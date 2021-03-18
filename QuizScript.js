const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const myQuestions = [
  {
    question: "1. The founder of Illuminati and his alias is",
    answers: {
      a: "Adam Wishaupt, Ajax",
      b: "Adam Wishaupt, Spartacus",
      c: "Massenhausen, Ajax",
      d: "Bauhof, Agathon"
    },
    correctAnswer: "b"
  },
  {
    question: "2. The goal of illuminati is",
    answers: {
      a: "Equity, freedom, self-rule",
      b: "Darvinism, survival of the strongest",
      c: "Monarchy, dictatorship, new world order",
      d: "Contact aliens, nuke the world"
    },
    correctAnswer: "a"
  },
  {
    question: "3. Regarding the French Revolution, the illuminati",
    answers: {
      a: "Was the mastermind",
      b: "Didn't participate at all",
      c: "Partly participated, but failed and some were executed later on.",
      d: "Was on the side of King Louis and were executed with him"
    },
    correctAnswer: "c"
  },
  {
    question: "4. The reason of exilation of Illuminati was",
    answers: {
      a: "Contacting aliens",
      b: "being in the service of the Austrian government",
      c: "Providing fund for USA",
      d: "Contacting Karl Marx for another copy of the Communist Manifesto"
    },
    correctAnswer: "b"
  },
  {
    question: "5. All conspiracy theories regarding the Illuminati is",
    answers:{
      a: "True",
      b: "False"
    },
    correctAnswer: "b"
  }
];
function buildQuiz(){
    const output = [];
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {
        const answers = [];
        for(letter in currentQuestion.answers){
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label><br>`
          );
        }
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div><br>`
        );
      }
    );
    quizContainer.innerHTML = output.join('');
}

function showResults(){
    const answerContainers = quizContainer.querySelectorAll('.answers');
    let numCorrect = 0;
    myQuestions.forEach( (currentQuestion, questionNumber) => {
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;
      if(userAnswer === currentQuestion.correctAnswer){
        numCorrect++;
        answerContainers[questionNumber].style.color = 'lightgreen';
      }
      else{
        answerContainers[questionNumber].style.color = 'red';
      }
    });
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }


buildQuiz();


submitButton.addEventListener('click', showResults);
