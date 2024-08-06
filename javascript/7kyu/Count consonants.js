// https://www.codewars.com/kata/564e7fc20f0b53eb02000106

// Complete the function that takes a string of English-language text and returns the number of consonants in the string.
// Consonants are all letters used to write English excluding the vowels a, e, i, o, u.

const consonantCount = (str) => {
	let count = 0
	for (const c of str) {
		if ("BCDFGHJKLMNPQRSTVWXYZbcdfghjklmnpqrstvwxyz".indexOf(c) >= 0)
            count++
	}

	return count
}