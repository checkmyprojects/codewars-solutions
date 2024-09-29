// https://www.codewars.com/kata/57faf32df815ebd49e000117

// Remove all exclamation marks from the end of words. Words are separated by a single space. There are no exclamation marks within a word.

function remove (string) {
    return s.replace(/\b!+/g, ''); 
}