// https://www.codewars.com/kata/56d949281b5fdc7666000004

function testit(a,b){
    a = [...new Set(a)];
    b = [...new Set(b)];
    return a.concat(b).sort(function(c,d){return c - d;});
}