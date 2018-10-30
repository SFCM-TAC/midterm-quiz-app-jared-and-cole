

//global answer choice var - for attaching event listeners
var globalAnswerChoices;

//global active question variables
var activeQuestion;
var selectedAnswer;
var activeQuestionChoices;

//result counter variables

var obiWan;
var thor;
var wonder;
var totoro;
var bDay;
var coffee;


function Question() {

  this.choices = [0,0,0,0,0,0];

}

var question1 = new Question();
var question2 = new Question();
var question3 = new Question();
var question4 = new Question();
var question5 = new Question();
var question6 = new Question();
var question7 = new Question();

//higlights selected answer green when user clicks on it.
function handleAnswerSelect(event) {
    selectedAnswer = event.target;

    //stores full list element (ul) for active question
    activeQuestion = selectedAnswer.parentNode;
    //stores nodelist of active question
    activeQuestionChoices = activeQuestion.children;
    console.log(activeQuestionChoices);
    //checks for and deselects (if found) previously selected answer choice within question clicked.

    for (var i = 0; i < activeQuestionChoices.length; i++)  {

          if (activeQuestionChoices[i].className = "answer-item-selected") {

            var previousSelection = activeQuestionChoices[i];
            previousSelection.setAttribute("class", "answer-item");
          }
        }
      selectedAnswer.setAttribute("class", "answer-item-selected");

//zeros question status array in all objects

    for (var i = 0; i < 6; i++) {

      activeQuestion.id


    }

    switch (activeQuestion.id) {

      case "c1":

        question1.choices = [0,0,0,0,0,0];

            if (question1.choices[selectedAnswer.id] === 0) {
              question1.choices[selectedAnswer.id]++;
            }

      break;

      case "c2":

        question2.choices = [0,0,0,0,0,0];

          if (question2.choices[selectedAnswer.id] === 0) {
            question2.choices[selectedAnswer.id]++;
            }
      break;

      case "c3":

        question3.choices = [0,0,0,0,0,0];

          if (question3.choices[selectedAnswer.id] === 0) {
            question3.choices[selectedAnswer.id]++;
            }

      break;

      case "c4":

        question4.choices = [0,0,0,0,0,0];

          if (question4.choices[selectedAnswer.id] === 0) {
          question4.choices[selectedAnswer.id]++;
            }
      break;

      case "c5":

        question5.choices = [0,0,0,0,0,0];

          if (question5.choices[selectedAnswer.id] === 0) {
          question5.choices[selectedAnswer.id]++;
            }
      break;

      case "c6":

        question6.choices = [0,0,0,0,0,0];

          if (question6.choices[selectedAnswer.id] === 0) {
          question6.choices[selectedAnswer.id]++;
            }
      break;

      case "c7":

        question7.choices = [0,0,0,0,0,0];

          if (question7.choices[selectedAnswer.id] === 0) {
          question7.choices[selectedAnswer.id]++;
            }
      break;



      //trigger function getResult() when sum of counters = 7



    }
}
  // console.log(activeQuestion);



/*removes all dom elements except the first div.
Replaces the contents of this div the correct result page (text and image).*/

// function getResult() {
//
//
//
//
//
// }

//Onload, gets and attaches a listener to each answer choice element on page.

function onLoad() {
  var el = document.getElementsByClassName("answer-item");
  globalAnswerChoices = el;

  //console.log(globalAnswerChoices);
  if (el.length > 0) {

    for (var i = 0; i < el.length; i++) {
        el[i].addEventListener('click', handleAnswerSelect);
    }
  }



  //console.log(globalAnswerChoices)
}

window.addEventListener('load', onLoad)
