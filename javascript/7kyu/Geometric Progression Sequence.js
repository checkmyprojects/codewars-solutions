// https://www.codewars.com/kata/55caef80d691f65cb6000040

// In your class, you have started lessons about geometric progression. Since you are also a programmer, you have decided to write a function that will print first n elements of the sequence with the given constant r and first element a.

// Result should be separated by comma and space.

function geometricSequenceElements(a, r, n){
    var res = [a];
    for (var i = 0; i < n - 1; i++)
        res.push(res[i]*r);

    return res.join(', ');
}