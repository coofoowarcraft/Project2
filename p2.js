/**
Jeff Palmer
Project 2
**/
var x = 0; //used to keep count of cookie value
var count = "count"; //name of cookie

function results() {
var cookie = getCookie(count);
document.getElementById("pr").innerHTML="You got " + cookie + " out of 3 correct!";
setCookie(count, x, 0);
}

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
          var x = getCookie(count);
          x++;
          setCookie(count, x, 1);
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
          var x = getCookie(count);
          x++;
          setCookie(count, x, 1);
        }
    }
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
        setCookie(count, 0, 1);
        if (document.getElementById("answer1").value == 6252500) {
          //correct answer
          document.getElementById("answerGroup1").classList.remove("has-error");
          document.getElementById("answerGroup1").classList.add("has-success");
          document.getElementById("answerError1").innerHTML="Correct Answer!";
          document.getElementById("answerError1").classList.add("shown-message");
          var x = 1;
          setCookie(count, x, 1);
        }
    }
  }

  //courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
  function setCookie(cname, cvalue, exdays) {
      var d = new Date();
      d.setTime(d.getTime() + (exdays*24*60*60*1000));
      var expires = "expires="+d.toUTCString();
      document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  //courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
  function getCookie(cname) {
      var name = cname + "=";
      var ca = document.cookie.split(';');
      for(var i = 0; i < ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) == ' ') {
              c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
              return c.substring(name.length, c.length);
          }
      }
      return "";
  }
