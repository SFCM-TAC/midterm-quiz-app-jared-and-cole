

// function getResult (highestIndex) {
//
//   var result;
//   var resultPic;
//
// //remove questions (x) and answer lists
//
//   var x = document.getElementsByClassName('x');
//     for (var i = 0; i < x.length; i++)  {
//       x[i].innerHTML = '';
//     }
//
// // add Congrats message (generic)
// // with switch personalize getResult
//       switch (highestIndex) {
//
//
//         case 0:
//
//             result = "ObiWan Ken";
//             resultPic = "https://i.redd.it/via5e9z79ve01.jpg";
//
//           break;
//
//         case 1:
//             result = "Thorgi";
//             resultPic = "https://img.cutenesscdn.com/640/ppds/be8c5fdd-8770-4dce-8325-638e90bed21d.jpg";
//
//         break;
//
//         case 2:
//
//             result = "Wonderbread";
//             resultPic = "https://i.pinimg.com/originals/58/3d/85/583d85f3bdb86551d2a630383a1f4497.jpg";
//
//         break;
//
//         case 3:
//
//             result = "Totoro";
//             resultPic = "https://www.jclaboutique.com/jclshop/image/cache//catalog/Totoro_Costume_Corgi2-600x600.JPG";
//
//           break;
//
//         case 4:
//
//             result = "Birthday";
//             resultPic = "http://www.browniebites.net/photos/2012/dogs/carrot-oatmeal-pupcakes-dog-muffins-and-corgi-birthday-20.jpg";
//
//           break;
//
//         case 5:
//
//             result = "Coffee";
//             resultPic = "https://66.media.tumblr.com/3ab96714ee265f6b042855aa08c1f884/tumblr_p3yyijvlVW1w5032io2_250.gif";
//
//           break;
//
//     }
//
//       var body = document.getElementsByTagName("BODY")[0];
//       console.log(body);
//       body.children[2].innerHTML = "You&#39;re " + result + " " + "Corgi!";
//
//       body.children[7].innerHTML = "<img src=" + resultPic + '>';
//
//       //body.children[7].innerHTML = '<img src='https://i.redd.it/via5e9z79ve01.jpg">';
// }


//global answer choice var - for attaching event listeners
var globalAnswerChoices;

//global active question variables
var activeQuestion;
var selectedAnswer;
var activeQuestionChoices;

//result counter totals

var obiWanTot = 0;

var obiWanVal1 = 0;
var obiWanVal2 = 0;
var obiWanVal3 = 0;
var obiWanVal4 = 0;
var obiWanVal5 = 0;
var obiWanVal6 = 0;
var obiWanVal7 = 0;

var thorTot = 0;

var thorVal1 = 0;
var thorVal2 = 0;
var thorVal3 = 0;
var thorVal4 = 0;
var thorVal5 = 0;
var thorVal6 = 0;
var thorVal7 = 0;

var wonderTot = 0;

var wonderVal1 = 0;
var wonderVal2 = 0;
var wonderVal3 = 0;
var wonderVal4 = 0;
var wonderVal5 = 0;
var wonderVal6 = 0;
var wonderVal7 = 0;

var totoroTot = 0;

var totoroVal1 = 0;
var totoroVal2 = 0;
var totoroVal3 = 0;
var totoroVal4 = 0;
var totoroVal5 = 0;
var totoroVal6 = 0;
var totoroVal7 = 0;

var bDayTot = 0;

var bDayVal1 = 0;
var bDayVal2 = 0;
var bDayVal3 = 0;
var bDayVal4 = 0;
var bDayVal5 = 0;
var bDayVal6 = 0;
var bDayVal7 = 0;

var coffeeTot = 0;

var coffeeVal1 = 0;
var coffeeVal2 = 0;
var coffeeVal3 = 0;
var coffeeVal4 = 0;
var coffeeVal5 = 0;
var coffeeVal6 = 0;
var coffeeVal7 = 0;


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
    //console.log(activeQuestionChoices);
    //checks for and deselects (if found) previously selected answer choice within question clicked.

    for (var i = 0; i < activeQuestionChoices.length; i++)  {

          if (activeQuestionChoices[i].className = "answer-item-selected") {

            var previousSelection = activeQuestionChoices[i];
            previousSelection.setAttribute("class", "answer-item");
          }
        }
      selectedAnswer.setAttribute("class", "answer-item-selected");

    switch (activeQuestion.id) {

      case "c1":

        question1.choices = [0,0,0,0,0,0];

            if (question1.choices[selectedAnswer.id] === 0) {
              question1.choices[selectedAnswer.id]++;
            }

             obiWanVal1 = question1.choices[0];
             thorVal1 = question1.choices[1];
             wonderVal1 = question1.choices[2];
             totoroVal1 = question1.choices[3];
             bDayVal1 = question1.choices[4];
             coffeeVal1 = question1.choices[5];

      break;

      case "c2":

        question2.choices = [0,0,0,0,0,0];

          if (question2.choices[selectedAnswer.id] === 0) {
            question2.choices[selectedAnswer.id]++;
            }

             obiWanVal2 = question2.choices[5];
             thorVal2 = question2.choices[4];
             wonderVal2 = question2.choices[3];
             totoroVal2 = question2.choices[2];
             bDayVal2 = question2.choices[1];
             coffeeVal2 = question2.choices[0];



      break;

      case "c3":

        question3.choices = [0,0,0,0,0,0];

          if (question3.choices[selectedAnswer.id] === 0) {
            question3.choices[selectedAnswer.id]++;
            }

             obiWanVal3 = question3.choices[2];
             thorVal3 = question3.choices[4];
             wonderVal3 = question3.choices[0];
             totoroVal3 = question3.choices[5];
             bDayVal3 = question3.choices[3];
             coffeeVal3 = question3.choices[1];

      break;

      case "c4":

        question4.choices = [0,0,0,0,0,0];

          if (question4.choices[selectedAnswer.id] === 0) {
          question4.choices[selectedAnswer.id]++;
            }

             obiWanVal4 = question4.choices[0];
             thorVal4   = question4.choices[2];
             wonderVal4 = question4.choices[3];
             totoroVal4 = question4.choices[4];
             bDayVal4   = question4.choices[5];
             coffeeVal4 = question4.choices[1];

      break;

      case "c5":

        question5.choices = [0,0,0,0,0,0];

          if (question5.choices[selectedAnswer.id] === 0) {
          question5.choices[selectedAnswer.id]++;
            }

             obiWanVal5 = question5.choices[1];
             thorVal5   = question5.choices[2];
             wonderVal5 = question5.choices[3];
             totoroVal5 = question5.choices[5];
             bDayVal5   = question5.choices[4];
             coffeeVal5 = question5.choices[0];

      break;

      case "c6":

        question6.choices = [0,0,0,0,0,0];

          if (question6.choices[selectedAnswer.id] === 0) {
          question6.choices[selectedAnswer.id]++;
            }

             obiWanVal6 = question6.choices[1];
             thorVal6   = question6.choices[4];
             wonderVal6 = question6.choices[2];
             totoroVal6 = question6.choices[5];
             bDayVal6   = question6.choices[0];
             coffeeVal6 = question6.choices[3];

      break;

      case "c7":

        question7.choices = [0,0,0,0,0,0];

          if (question7.choices[selectedAnswer.id] === 0) {
          question7.choices[selectedAnswer.id]++;
            }

             obiWanVal7 = question7.choices[2];
             thorVal7   = question7.choices[3];
             wonderVal7 = question7.choices[1];
             totoroVal7 = question7.choices[5];
             bDayVal7   = question7.choices[4];
             coffeeVal7 = question7.choices[0];

             break;

      }

//totals values for each result.

     obiWanTot = obiWanVal1 + obiWanVal2 + obiWanVal3 + obiWanVal4 + obiWanVal5
     + obiWanVal6 + obiWanVal7;

     thorTot = thorVal1 + thorVal2 + thorVal3 + thorVal4 + thorVal5 + thorVal6 + thorVal7;

     wonderTot = wonderVal1 + wonderVal2 + wonderVal3 + wonderVal4 + wonderVal5 + wonderVal6 + wonderVal7;

     totoroTot = totoroVal1 + totoroVal2 + totoroVal3 + totoroVal4 + totoroVal5 + totoroVal6 + totoroVal7;

     bDayTot = bDayVal1 + bDayVal2 + bDayVal3 + bDayVal4 + bDayVal5 + bDayVal6 + bDayVal7;

     coffeeTot = coffeeVal1 + coffeeVal2 + coffeeVal3 + coffeeVal4 + coffeeVal5 + coffeeVal6 + coffeeVal7;

// checks to see when last question is answered.  Calls tally function to determine result.

       if (obiWanTot + thorTot + wonderTot + totoroTot + bDayTot + coffeeTot === 7) {

       tally();

       }

}

// console.log(obiWanTot);
// console.log(thorTot);
// console.log(wonderTot);
// console.log(totoroTot);
// console.log(bDayTot);
// console.log(coffeeTot);

//determines result.

function tally() {

  var totals = [obiWanTot, thorTot, wonderTot, totoroTot, bDayTot, coffeeTot];
  console.log(totals);

  var highestNum = 0;
  var highestIndex = 0;

    for (var i = 0; i < totals.length; i++)  {

      if (totals[i] > highestNum) {
        highestIndex = i;
        highestNum = totals[i];
    }
  }

  console.log(highestIndex);
  console.log(highestNum);

  getResult (highestIndex);

}



function getResult (highestIndex) {

  var result;
  var resultPic;

//remove questions (x) and answer lists

  var x = document.getElementsByClassName('x');
    for (var i = 0; i < x.length; i++)  {
      x[i].innerHTML = '';
    }

// add Congrats message (generic)
// with switch personalize getResult
      switch (highestIndex) {


        case 0:

            result = "ObiWan Ken";
            resultPic = "https://i.redd.it/via5e9z79ve01.jpg";

          break;

        case 1:
            result = "Thorgi";
            resultPic = "https://img.cutenesscdn.com/640/ppds/be8c5fdd-8770-4dce-8325-638e90bed21d.jpg";

        break;

        case 2:

            result = "Wonderbread";
            resultPic = "https://i.pinimg.com/originals/58/3d/85/583d85f3bdb86551d2a630383a1f4497.jpg";

        break;

        case 3:

            result = "Totoro";
            resultPic = "https://www.jclaboutique.com/jclshop/image/cache//catalog/Totoro_Costume_Corgi2-600x600.JPG";

          break;

        case 4:

            result = "Birthday";
            resultPic = "http://www.browniebites.net/photos/2012/dogs/carrot-oatmeal-pupcakes-dog-muffins-and-corgi-birthday-20.jpg";

          break;

        case 5:

            result = "Coffee";
            resultPic = "https://66.media.tumblr.com/3ab96714ee265f6b042855aa08c1f884/tumblr_p3yyijvlVW1w5032io2_250.gif";

          break;

    }

      var body = document.getElementsByTagName("BODY")[0];
      console.log(body);
      body.children[2].innerHTML = "You&#39;re " + result + " " + "Corgi!";

      body.children[7].innerHTML = "<img src=" + resultPic + '>';

      //body.children[7].innerHTML = '<img src='https://i.redd.it/via5e9z79ve01.jpg">';
}




// displayResult()


/*removes all dom elements except the first div.
Replaces the contents of this div the correct result page (text and image).*/

// function displayResult() {
//
// document.body.innerHTML = '';
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

  // var obiWan = document.getElementsByClassName("obiWan");
  //   if (obiWan.length > 0) {
  //     for (var i = 0; i < obiWan.length; i++) {
  //         obiWan[i].addEventListener('click', obiWanCount);
  //     }
  //   }

  //console.log(globalAnswerChoices)
}

window.addEventListener('load', onLoad)
