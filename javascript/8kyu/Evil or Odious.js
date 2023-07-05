// https://www.codewars.com/kata/56fcfad9c7e1fa2472000034

function evil(n) {
    return n.toString(2).match(/1/g).length % 2 ? 'It\'s Odious!' : 'It\'s Evil!';
}