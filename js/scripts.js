
//req1
function numberCheck(input) {
  if (isNaN(parseInt(input))) {
    return input + " is not a number";
  } else {
    return parseInt(input);
  }
};

//req2
function zeroOne(input) {
  var input = numberCheck(input);
  if (input % 3 === 0) {
    var input = "I'm sorry Dave, I'm afraid I can't do that"
    return input;
    } else if ((/[1]/).test(input)) {
      var input = "Boop";
      return input;
    } else if ((/[0]/).test(input)) {
      var input = "Beep";
      return input;
    } else {
      return input;
    }
}


$(document).ready(function() {
  var userInput = prompt("please enter a number");
  alert(zeroOne(userInput));




});
