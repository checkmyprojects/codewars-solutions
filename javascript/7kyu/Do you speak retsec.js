// https://www.codewars.com/kata/5516ab668915478845000780

// You're given a single word. Your task is to swap the halves. If the word has an uneven length, leave the character in the middle at that position and swap the chunks around it.

function reverseByCenter(s) {
    var n = s.length / 2
    return s.slice(Math.ceil(n)) + s.slice(Math.floor(n), Math.ceil(n)) + s.slice(0, Math.floor(n))
}