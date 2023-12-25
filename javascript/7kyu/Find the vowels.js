// https://www.codewars.com/kata/5680781b6b7c2be860000036

// We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).
// So given a string "super", we should return a list of [2, 4].

function vowelIndices(word) {
    var arr = [];
    for(var i = 0; i < word.length; i++) {
        if(/[aeioyu]/i.test(word[i])) {
            arr.push(i+1);
        }
    }
    return arr;
}