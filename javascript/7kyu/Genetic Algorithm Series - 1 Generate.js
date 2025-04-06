// https://www.codewars.com/kata/567d609f1c16d7369c000008

// A genetic algorithm is based in groups of chromosomes, called populations. To start our population of chromosomes we need to generate random binary strings with a specified length.

// In this kata you have to implement a function generate that receives a length and has to return a random binary strign with length characters.

const generate = (length) => {
    let bits = '';

    for (let i = 0; i < length; i++) {
        bits += Math.round(Math.random());
    }
    
    return bits;
}