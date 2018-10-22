

//global answer choice var
var globalAnswerChoices;


//handles class change of answer choices when selected
function handleAnswerSelect(event) {
    var selectedAnswer = event.target;
    selectedAnswer.setAttribute('class', 'answer-item-selected');
    console.log(event.target);

  for (var i = 0; i < globalAnswerChoices.length; i++) {

        if (i === event.target.id) {
                continue;
              }

              else if (globalAnswerChoices[i].className = 'answer-item-selected') {

              var alreadySelected = globalAnswerChoices[i];
              alreadySelected.setAttribute('class', 'answer-item');

          }
        }
      }
//Onload, gets answer elements and attaches listener to each one.

function onLoad() {
  var el = document.getElementsByClassName("answer-item");
  globalAnswerChoices = el;

  //console.log(globalAnswerChoices);
  if (el.length > 0) {

    for (var i = 0; i < el.length; i++) {
        el[i].addEventListener('click', handleAnswerSelect);

    }
  }
}
window.addEventListener('load', onLoad)
