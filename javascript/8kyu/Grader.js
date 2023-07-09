// Create a function that takes a number as an argument and returns a grade based on that number.

// https://www.codewars.com/kata/53d16bd82578b1fb5b00128c

function grader(score) {
    if (score>1||score<0.6) return 'F'
    if (score<0.7) return 'D'
    if (score<0.8) return 'C'
    if (score<0.9) return 'B'
    return 'A'
  }