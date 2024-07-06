// https://www.codewars.com/kata/56786a687e9a88d1cf00005d

// You are going to be given a word. Your job will be to make sure that each character in that word has the exact same number of occurrences. You will return true if it is valid, or false if it is not.

// For this kata, capitals are considered the same as lowercase letters. Therefore: "A" == "a"

// The input is a string (with no spaces) containing [a-z],[A-Z],[0-9] and common symbols. The length will be 0 < length < 100.

function validateWord(s, c = s.toLowerCase()) {
	return c.length % new Set(c).size == 0
}