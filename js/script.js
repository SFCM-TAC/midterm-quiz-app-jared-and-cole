

//global answer choice var
var globalAnswerChoices;


//higlights selected answer green when user clicks on it.
function handleAnswerSelect(event) {
    var selectedAnswer = event.target;

    //stores full list element (ul) for active question
    var activeQuestion = selectedAnswer.parentNode;
    //stores nodelist of active question
    var activeQuestionChoices = activeQuestion.children;
    console.log(activeQuestionChoices);
    //checks for and deselects (if found) previously selected answer choice within question clicked.

    for (var i = 0; i < activeQuestionChoices.length; i++)  {

          if (activeQuestionChoices[i].className = "answer-item-selected") {

              var previousSelection = activeQuestionChoices[i];
              previousSelection.setAttribute("class", "answer-item");

            }
          }

      selectedAnswer.setAttribute("class", "answer-item-selected");

    }

  // for (var i = 0; i < activeQuestionChoices.length; i++) {
  //
  //       // if (i === selectedAnswer.id)
  //       //   {continue;}
  //
  //           if (activeQuestionChoices[i].className = "answer-item-selected") {
  //
  //             var previousSelection = activeQuestionChoices[i];
  //             previousSelection.setAttribute("class", "answer-item");
  //
  //         }
      //  }

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
