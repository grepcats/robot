//function zeroOne(input) {
//  if (input.contains(0))
//}

function numberCheck(input) {
  if (isNaN(parseInt(input))) {
    return input + " is not a number";
  } else {
    return parseInt(input);
  }
};

$(document).ready(function() {
  var input = prompt("please enter a number");
  alert(numberCheck(input));



});
