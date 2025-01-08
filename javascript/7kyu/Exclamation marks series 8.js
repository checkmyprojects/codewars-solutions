// https://www.codewars.com/kata/57fafd0ed80daac48800019f

// Move all exclamation marks to the end of the sentence

function remove(s) {
    const x = s.replace(/!+/g, "")
    return x + "!".repeat(s.length - x.length)
}