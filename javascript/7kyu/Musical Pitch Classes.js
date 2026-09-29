// https://www.codewars.com/kata/54d472e98776e4eb5b000215

// In music, each note is named by its pitch class (e.g., C, E♭, F♯), and each pitch class can alternatively be expressed as an integer from 0 to 11. Your task will be to write a function that, when given a letter-based pitch class, returns the corresponding integer.

// Only seven letters are used to name the notes: "A" through "G." These letter names are cyclical, just like the days of the week. The notes corresponding to those letters are called the "natural notes." Here are the numbers corresponding to each of them:

//     C : 0
//     D : 2
//     E : 4
//     F : 5
//     G : 7
//     A : 9
//     B : 11

// So 'D' has a pitch class of 2, and 'B' has a pitch class of 11.

// The sharp sign ("♯") is essentially an increment operator, so "C♯" (pronounced "C sharp") refers to one note higher than C, which has a value of 1, whereas F♯ has a value of 6. Since Codewars doesn't allow the sharp sign, we'll use a number sign ("#") instead.

// The flat sign ("♭") is the opposite of a sharp, meaning one note lower. F♭ has a value of 4, and C♭ has a value of 11 (going below 0 cycles back to 11, the twelve-note system is cyclical). Since Codewars doesn't allow the flat sign, we'll use a lowercase "b" instead.

// Return the appropriate null value in your language (JS: null, Python: None, Ruby: nil) for invalid input.

function pitchClass(note) {
    if (!/^[A-G][#b]?$/.test(note)) return null
    
    var pitch = {C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11}
    var accidental = {'#': 1, 'b': -1}
    
    return (12 + pitch[note[0]] + (accidental[note[1]] || 0)) % 12
}