// https://www.codewars.com/kata/6755744942b3aa2fc21f0b64

// The Iconic Standoff: A Tale of Three Gunslingers (Lore)

// In the classic spaghetti Western "The Good, the Bad and the Ugly" three gunslingers face off in an unforgettable Mexican standoff. Blondie (Clint Eastwood), Angel Eyes (Lee Van Cleef), and Tuco (Eli Wallach) confront each other in a tense, three-way duel over buried Confederate gold. This iconic scene, set in a circular cemetery, has become one of the most famous standoffs in cinema history.

//     next kata: "The Good, the Bad and the Ugly" (work in progress)

// While the film features a thrilling three-way confrontation, our current code challenge serves as a warm-up, focusing on a duel between two opponents. This simplified version draws inspiration from the German title of the movie, "Zwei glorreiche Halunken," which translates to "Two Glorious Rascals".
// Problem Description

// In this turn-based duel, two gunslingers face off. Unlike the movie's Mexican standoff, they take turns shooting at each other. The first to hit their opponent wins the duel. Each gunslinger has a specific probability of hitting their target:

//     Person A has a chance p to hit and 1-p to miss.
//     Person B has a chance q to hit and 1-q to miss.

// Your task is to calculate the probability of Person A winning the duel under two scenarios:

//     Person A shoots first
//     Person B shoots first

//     Note: floating points are used instead of fractions/rationals to support more programming languages

// Input

//     p: float (0 ≤ p ≤ 1), Person A's probability of hitting
//     q: float (0 ≤ q ≤ 1), Person B's probability of hitting

// Output

//     Return a tuple of two floating point numbers, representing:
//         item 1: float, probability of Person A winning when shooting first
//         item 2: float, probability of Person A winning when shooting second
//     Do not round floating point numbers, instead such values get verified using an error margin of 1e-6.
//     If it can be determined that no shooter ever wins, there is no duel, and you should return null / None (or the equivalent in your programming language).

// Example

// p = 0.8
// q = 0.5

// return [0.8888889, 0.4444445]

// Footer

// May your aim be true and your nerves steady, partner. The sun's high, the air's thick with tension, and your opponent's eyes are locked on you. It's time to see if you're the glorious rascal who walks away from this duel. Good luck!

function f(p, q) {
    if (p === 0 && q === 0) { return null }
    let lose = (1 - p) * (1 - q)
    return [p / (1 - lose), 1 - q / (1 - lose)]
}