// https://www.codewars.com/kata/57073869924f34185100036d

// Write a function that will randomly upper and lower characters in a string - randomCase() (random_case() for Python).

function randomCase(x) {
    return x.split('')
            .map(function(e) { 
                return Math.random() < 0.5 ? e.toUpperCase() : e.toLowerCase(); 
            })
            .join('');
}