// https://www.codewars.com/kata/56368f37d464c0a43c00007f

// Debug a function called calculate that takes 3 values. The first and third values are numbers. The second value is a character. If the character is "+" , "-", "*", or "/", the function will return the result of the corresponding mathematical function on the two numbers. If the string is not one of the specified characters, the function should return null.

const calculate = (a, op, b) => {
	switch (op) {
		case "+": return a + b
		case "-": return a - b
		case "*": return a * b
		case "/": return b ? a / b : null
	}

	return null
}