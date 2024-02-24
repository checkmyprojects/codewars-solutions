// https://www.codewars.com/kata/57ee24e17b45eff6d6000164

// You will be given a string (x) featuring a cat 'C' and a mouse 'm'. The rest of the string will be made up of '.'.

function catMouse(x) {
    return x.length <= 5 ? 'Caught!' : 'Escaped!';
}