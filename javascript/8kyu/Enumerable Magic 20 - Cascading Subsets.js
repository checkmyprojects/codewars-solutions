// https://www.codewars.com/kata/545af3d185166a3dec001190

function eachCons(array, n) {
    let res = [];
    for(let i = 0; i < array.length; i++){
        res.push(array.slice(i,i + n));
    }
    return res.filter(e => e.length === n);
}