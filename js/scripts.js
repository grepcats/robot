//business logic
var subNum = 0;

//takes a number and replaces it with other content
function replaceZeroOneThree(input, name) {
  if (input % 3 === 0 && input !== 0) {
    input = "I'm sorry " + name + ", I'm afraid I can't do that";
    return input;
    } else if ((/[1]/).test(input)) {
      input = "Boop";
      return input;
    } else if ((/[0]/).test(input)) {
      input = "Beep";
      return input;
    } else {
      return input;
    }
}

//takes a number and returns array of range of numbers from 0 to input.
function numberArray(input) {
  var countTo = [];
  for (var i = 0; i <= input; i++) {
    countTo.push(i);
  }
  return countTo;
}

//takes array of content, transforms with replaceZeroOneThree and outputs new array
function transform(input, name) {
  var transformedArray = input.map(function(number) {
    return replaceZeroOneThree(number, name);
  });
  return transformedArray;
}

//takes an array and reverses it
function reverse(input) {
  return input.reverse();
}

//user interface logic
$(document).ready(function() {

  $("#number-input").submit(function(event) {
    event.preventDefault();

    $(".output").remove();
    var userInput = parseInt($("#number").val());
    var nameInput = $("#name").val();
    var revNum = 0;

    if (nameInput === "") {
      nameInput = "friend";
    }
    //evaluates userInput to ensure it is a number before executing rest of code
    if (!isNaN(userInput)) {
      subNum = 0; //reset submit number so robot is happy again
      $("#results").show();
      $(".wrong").remove();
      $(".robot").html("<img src='img/robot.svg' alt='happy robot'/>");
      $("#results").append("<div class='output'><h3>You entered: " + userInput);
      var output = transform(numberArray(userInput), nameInput);
      output.forEach(function(number) {
        $(".output").append(number + "<br/>");
      });
      $("#reverse").show();

      //reverse output on click
      $("#reverse-click").click(function() {
        var reversed = reverse(output);
        $(".output").remove();

        //header displays different text depending on number of times reversed
        if (revNum === 0) {
          $("#results").append("<div class='output'><h3>Reversed " + userInput + "!");
        } else if (revNum > 0 && revNum <= 3) {
          $("#results").append("<div class='output'><h3>Reversed " + userInput + " again, good job!");
        } else {
          $("#results").append("<div class='output'><h3>Ok calm down, " + nameInput + ".");
        }
        revNum++;
        reversed.forEach(function(number) {
          $(".output").append(number + "<br/>");
        });

      });
    } else {
      //handle user submitting non-numeric content
      subNum++;
      $(".wrong").remove();
      $("#reverse").hide();
      $("#results").show();
      $("#results").append("<div class='wrong'><h3>That's not a number! Try again</h3>");
      $(".robot").html("<img src='img/angry-robot.svg' class='robot-replace'/>");
      if (subNum >= 3) {
        $(".robot").html("<img src='img/v-angry-robot.svg' class='robot-replace'/>");
      }
    }
  });
});
