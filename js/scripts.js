
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
  if ((/[0]/).test(input)) {
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
