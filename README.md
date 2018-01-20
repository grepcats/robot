# Robot

#### _A chatty robot, 1/19/2018_

#### By _**Kayla Ondracek**_

## Description

A friendly robot will take a name and number from the user and translate it to robot talk. Robot will get sassy when you reverse the output too many times. Robot will also get mad if you submit non-numeric content - and will get even angrier if you keep doing so!

## Specs

1. Program does not take non-numeric characters
Example Input: cat
Example Output: cat (replaced with later non-numeric character handling)

2. Program replaces all chars in number containing 0 with "Beep"
Example Input: 0
Example Output: Beep

3. Program replaces all chars in number containing 1 with "Boop", prioritized over "0" message behavior
Example Input: 1, 10
Example Output: Boop, Boop

4. Program replaces all chars in number divisible by 3 with "I'm sorry, Dave. I'm afraid I can't do that", prioritized over "0" and "1" message behavior
Example Input: 30, 12
Example Output: I'm sorry, Dave. I'm afraid I can't do that

5. Program takes a number and produces a range of numbers from 0 to the provided number
Example Input: 5
Example Output: 1, 2, 3, 4, 5

6. Program takes a number and produces a range of numbers from 0 to the provided number with the appropriate replacements
Example Input: 5
Example Output: Beep, Boop, 2, I'm sorry, Dave. I'm afraid I can't do that, 4, 5

7. Program handles non-numeric characters
Example Input: cat
Example Output: error message and return to Program

8. Program takes user's name and displays in the "I'm sorry, Dave. I'm afraid I can't do that" transformation
Example Input: Kayla, 3
Example Output: Beep, Boop, I'm sorry, Kayla. I'm afraid I can't do that.

9. Program offers an option to return output in reverse.
Example Input: Beep, Boop, I'm sorry, Kayla. I'm afraid I can't do that.
Example Output I'm sorry, Kayla. I'm afraid I can't do that., Boop, Beep

10. Program sasses user if they keep reversing output
Example Input: click "click here to reverse results" more than 3 times
Example Output: "Ok calm down"

11. Program displays v angry robot if they keep submitting non-numeric content
Example Input: cat (enter 3 times)
Example Output: an angry robot image.

## Setup/Installation Instructions
* git clone robot repository
* Open index.html and navigate website

Alternatively, user may access the website at https://grepcats.github.io/robot

## Known Bugs

No known bugs at this time.

## Support and contact details

If there are any issues or questions, please contact me at kayla.renee at gmail dot com or create an issue in GitHub.

## Technologies Used

JavaScript, jQuery.

### License

Copyright (c) 2018 **Kayla Ondracek**

Robot image used under Linkware License and attributed appropriately.
https://visualpharm.com/free-icons/robot%202-595b40b85ba036ed117da97d
