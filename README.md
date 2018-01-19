## Specs

Program does not take non-numeric characters
Example Input: cat
Example Output: cat

Program takes a number and produces a range of numbers from 0 to the provided number
Example Input: 5
Example Output: 1, 2, 3, 4, 5

Program replaces all chars in number containing 0 with "Beep"
Example Input: 0
Example Output: Beep

Program replaces all chars in number containing 1 with "Boop", prioritized over "0" message behavior
Example Input: 1, 10
Example Output: Boop, Boop

Program replaces all chars in number divisible by 3 with "I'm sorry, Dave. I'm afraid I can't do that", prioritized over "0" and "1" message behavior
Example Input: 30, 12
Example Output: I'm sorry, Dave. I'm afraid I can't do that

Program takes a number and produces a range of numbers from 0 to the provided number with the appropriate replacements
Example Input: 5
Example Output: Beep, Boop, 2, I'm sorry, Dave. I'm afraid I can't do that, 4, 5

Program handles non-numeric characters
Example Input: cat
Example Output: error message and return to Program
