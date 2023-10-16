// https://www.codewars.com/kata/56e6a330715e7221d9000a3b

Number.prototype.times = function(f) {
    for (let i = 0; i < this; i++){
        f(i)
    }
}