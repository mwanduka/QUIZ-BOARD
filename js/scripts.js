function reload() {
  location.reload();
}
// function check() {
//   var question1 = document.Quiz.question1.val();
//   var question2 = document.Quiz.question2.val();
//   var question3 = document.Quiz.question3.val();
//   var question4 = document.Quiz.question4.val();
//   var correct =100;
//
//  if(question1 == "An object is just a container for a collection of named values" {
//   correct+=12;
// }
//
//  if(question2 == "It adds the desired number of element to the top of an array") {
//   correct+=12;
// }
//
//  if(question3 == "Allows early manipulation of the code") {
//   correct+=12;
// }
//
//  if(question4 == "/script>") {
//   correct+=12;
// }
//
//   var messages = ["Good", "Fair", "Excellent"];
//
//   var range;
//
//   if (correct < 1){
//   range = 2;
// }
//
// if (correct > 0 && correct < 3){
//   range = 1;
// }
//
// if (correct > 2){
//   range = 0;
// }
//    document.getElementById("message").innerHTML = messages[range];
//    documet.getElementById("number_correct").innerHTML = "You scored" + correct + "percent"
// //  }
// function check(){
//  var question1= document.Quiz.question1.val();
//  var question2= document.Quiz.question2.val();
//  var question3= document.Quiz.question3.val();
//  var correct=0;
//
//
// if (question1 == "An object is just a container for a collection of named values") {
// correct++;
// }
//
// if (question2 == "It adds the desired number of element to the top of an array") {
//  correct++;
// }
//
// if (question3 == "Allows early manipulation of the code") {
//  correct++;
// }
//
//
// var messages = ["Fair", "Good", "Excellent"];
//
// var range;
//
//  if (correct < 1)
//  {
//    range = 2;
//  }
//
//  if (correct > 0 && correct < 3){
//    range = 1;
//  }
//
//  if (correct > 2){
//    range = 0;
//  }
//  document.getElementById("message").innerHTML= messages[range];
//  document.getElementById("number_correct").innerHTML = "You scored " + correct + " percent";
// // }
// function check() {
//  var question1 = document.Quiz.question1.val();
//  var question2 = document.Quiz.question2.val();
//  var question3 = document.Quiz.question3.val();
//  var correct = 0;
// }
//
//  if (question1 == "An object is just a container for a collection of named values"); {
//   correct+=12;
// }
//
//  if (question2 == "It adds the desired number of element to the top of an array"); {
//   correct+=12;
// }
//
//  if (question3 == "Allows early manipulation of the code"); {
//   correct+=12;
// }
//
//
// var messages = ["Great job!", "That's just okay", "You really need to do better"];
//
// var range;
//
//  if (correct < 1){
//    range = 2;
//  }
//
//  if (correct > 0 && correct < 3){
//    range = 1;
//  }
//
//  if (correct > 2){
//    range = 0;
//  }
//
//  document.getElementById("message").innerHTML= messages[range];
//  document.getElementById("number_correct").innerHTML = "You scored " + correct + " percent";
//  });
function check(){
 var question1= document.Quiz.question1.val();
 var question2= document.Quiz.question2.val();
 var question3= document.Quiz.question3.val();
 var correct=0;


if (question1 == "An object is just a container for a collection of named values") {
correct++;
}

if (question2 == "It adds the desired number of element to the top of an array") {
 correct++;
}

if (question3 == "Allows early manipulation of the code") {
 correct++;
}


var messages = ["Great job!", "That's just okay", "You really need to do better"];

var range;

 if (correct < 1)
 {
   range = 2;
 }

 if (correct > 0 && correct < 3){
   range = 1;
 }

 if (correct > 2){
   range = 0;
 }
 document.getElementById("message").innerHTML= messages[range];
 document.getElementById("number_correct").innerHTML = "You scored " + correct + " percent";
}
