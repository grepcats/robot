## Specs

1. Program does not take non-numeric characters
Example Input: cat
Example Output: cat

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


---
8. Program takes user's name and displays in the "I'm sorry, Dave. I'm afraid I can't do that" transformation
Example Input: Kayla, 3
Example Output: Beep, Boop, I'm sorry, Kayla. I'm afraid I can't do that.

9. Program offers an option to return output in reverse.

10. Program sasses user if they keep reversing output

11. Program displays v angry robot if they keep submitting non-numeric content
