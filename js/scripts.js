
//identifies if input is number or NaN
function numberCheck(input) {
  if (isNaN(parseInt(input)) || input === "" || input === " ") {
    return false;
  } else {
    return input;
  }
};

//takes a string/number and replaces it with other content
function zeroOne(input, name) {
  //var input = numberCheck(input);
  if (name === "") {
    var name = "friend";
  }

  if (input % 3 === 0 && input !== 0) {
    var input = "I'm sorry " + name + ", I'm afraid I can't do that"
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

//returns array of range of numbers from 0 to input.
function inputArray(input) {
  //var input = numberCheck(input);
  var countTo = []
  for (var i = 0; i <= input; i++) {
    countTo.push(i);
  }
  return countTo;
}

//take array of numbers from zeroOne and output changes
function transform(input, name) {
  var transformedArray = input.map(function(number) {
    return zeroOne(number, name);
  });

  return transformedArray;
}

$(document).ready(function() {

  $("#number-input").submit(function(event) {
    event.preventDefault();
    //$("html, body").scrollBottom();
    $(".output").remove();
    var userInput = $("#number").val();
    var nameInput = $("#name").val();

    if (numberCheck(userInput) !== false) {
      $("#results").show();
      $(".wrong").remove();
      $(".robot").html("<img src='img/robot.svg'/>");
      $("#results").append("<div class='output'><h3>You entered: " + userInput)
      var output = transform(inputArray(userInput), nameInput);
      output.forEach(function(number) {
        $(".output").append(number + "<br/>")
      });
    } else {
      $(".wrong").remove();
      $("#results").show();
      $("#results").append("<div class='wrong'><p>That's not a number! Try again</p>")
      $(".robot").html("<img src='img/angry-robot.svg' id='angry'/>");
    }

  });




});
