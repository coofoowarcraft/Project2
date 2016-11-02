/**
Jeff Palmer
Project 2
**/

function questionTwo() {
var input2 = document.getElementById("answer2").value;

//Input For Question 2
    if (isNaN(input2)) {
      document.getElementById("answerGroup2").classList.remove("has-success");
      document.getElementById("answerGroup2").classList.add("has-error");
      document.getElementById("answerError2").innerHTML="Must be a Number.";
      document.getElementById("answerError2").classList.remove("hidden-message");
      document.getElementById("answerError2").classList.add("shown-message");
    } else {
        //wrong answer
        document.getElementById("answerGroup2").classList.add("has-error");
        document.getElementById("answerError2").classList.add("shown-message");
        document.getElementById("answerError2").innerHTML="Wrong Answer.";
        if (document.getElementById("answer2").value == 5006251) {
          //correct answer
          document.getElementById("answerGroup2").classList.remove("has-error");
          document.getElementById("answerGroup2").classList.add("has-success");
          document.getElementById("answerError2").innerHTML="Correct Answer!";
          document.getElementById("answerError2").classList.add("shown-message");
        }
    }
}

function questionThree() {
var input3 = document.getElementById("answer3").value;

//Input For Question 3
    if (isNaN(input3)) {
      document.getElementById("answerGroup3").classList.remove("has-success");
      document.getElementById("answerGroup3").classList.add("has-error");
      document.getElementById("answerError3").innerHTML="Must be a Number.";
      document.getElementById("answerError3").classList.remove("hidden-message");
      document.getElementById("answerError3").classList.add("shown-message");
    } else {
        //wrong answer
        document.getElementById("answerGroup3").classList.add("has-error");
        document.getElementById("answerError3").classList.add("shown-message");
        document.getElementById("answerError3").innerHTML="Wrong Answer.";
        if (document.getElementById("answer3").value == 50755015075150) {
          //right answer
          document.getElementById("answerGroup3").classList.remove("has-error");
          document.getElementById("answerGroup3").classList.add("has-success");
          document.getElementById("answerError3").innerHTML="Correct Answer!";
          document.getElementById("answerError3").classList.add("shown-message");
        }
    }
}

function results() {
document.getElementById("pr").innerHTML="You got x answers correct!";
}

function myFunction() {
    var input1 = document.getElementById("answer1").value;

//Input For Question 1
    if (isNaN(input1)) {
      document.getElementById("answerGroup1").classList.remove("has-success");
      document.getElementById("answerGroup1").classList.add("has-error");
      document.getElementById("answerError1").innerHTML="Must be a Number.";
      document.getElementById("answerError1").classList.remove("hidden-message");
      document.getElementById("answerError1").classList.add("shown-message");
    } else {
        //wrong answer
        document.getElementById("answerGroup1").classList.add("has-error");
        document.getElementById("answerError1").classList.add("shown-message");
        document.getElementById("answerError1").innerHTML="Wrong Answer.";
        if (document.getElementById("answer1").value == 6252500) {
          //correct answer
          document.getElementById("answerGroup1").classList.remove("has-error");
          document.getElementById("answerGroup1").classList.add("has-success");
          document.getElementById("answerError1").innerHTML="Correct Answer!";
          document.getElementById("answerError1").classList.add("shown-message");
        }
    }
  }
