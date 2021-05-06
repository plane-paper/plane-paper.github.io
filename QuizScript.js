const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const myQuestions = [
  {
    question: "1. The first official spacecraft is launched by: ",
    answers: {
      a: "Wakanda",
      b: "USSR",
      c: "USA",
      d: "The Democratic Republic of Germany"
    },
    correctAnswer: "b"
  },
  {
    question: "2. _____ is not a purpose of a spacecraft",
    answers: {
      a: "Meteorology",
      b: "Earth Observation",
      c: "Planetary Colonization",
      d: "Industrialization"
    },
    correctAnswer: "d"
  },
  {
    question: "3. Spacecrafts doesn't have a specific size limit, but...",
    answers: {
      a: "It needs to be large enough to contain an alien",
      b: "It must be able to contain at least one astraunot and/or cargo equipments",
      c: "It must be able to fit inside a rocket fairing and the rocket must have enough power to lift it into orbit",
      d: "There is no other limits. A spacecraft can be as big or as small as it wants."
    },
    correctAnswer: "c"
  },
  {
    question: "4. As technology improves, the limitation on weight gets lifted, therefore...",
    answers: {
      a: "The efficiency of performing tasks lower",
      b: "The efficiency of performing tasks improve",
      c: "The reliability of the spacecraft lower",
      d: "The reliability of the spacecraft improve"
    },
    correctAnswer: "b"
  },
  {
    question: "5. A spacecraft's shape is dictated by...",
    answers:{
      a: "It must be streamlined",
      b: "Whether it spins or not",
      c: "It must be circular",
      d: "Whether there are people onboard or not."
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
    alert(`${numCorrect} out of ${myQuestions.length}`);
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    
  }


buildQuiz();


submitButton.addEventListener('click', showResults);
