
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

//takes an array and reverses it
function reverse(input) {
  return input.reverse();
}

$(document).ready(function() {
  var subNum = 0;

  $("#number-input").submit(function(event) {
    event.preventDefault();
    $(".output").remove();
    var userInput = $("#number").val();
    var nameInput = $("#name").val();
    var revNum = 0;


    if (numberCheck(userInput) !== false) {
      $("#results").show();
      $(".wrong").remove();
      $(".robot").html("<img src='img/robot.svg'/>");
      $("#results").append("<div class='output'><h3>You entered: " + userInput)
      var output = transform(inputArray(userInput), nameInput);
      output.forEach(function(number) {
        $(".output").append(number + "<br/>")
      });
      $("#reverse").show();


      $("#reverse-click").click(function() {
        revNum++;
        var reversed = reverse(output);
        $(".output").remove();
        if (revNum === 0) {
          $("#results").append("<div class='output'><h3>Reversed " + userInput + "!")
        } else if (revNum > 0 && revNum < 5) {
          $("#results").append("<div class='output'><h3>Reversed " + userInput + " again, good job!")
        } else {
          $("#results").append("<div class='output'><h3>Ok calm down, " + nameInput + ".")
        }

        reversed.forEach(function(number) {
          $(".output").append(number + "<br/>")
        });
      });
    } else {
      subNum++;
      console.log(subNum);
      $(".wrong").remove();
      $("#results").show();
      $("#results").append("<div class='wrong'><h3>That's not a number! Try again</h3>")
      $(".robot").html("<img src='img/angry-robot.svg' class='robot-replace'/>");
    }

  });




});
