// https://www.codewars.com/kata/57f759bb664021a30300007d

// Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

function switcheroo(x){
    return x.split('').map(function(e){
        if (e =='b')return 'a';
        if (e == 'a') return 'b';
        if(e=='c') return 'c'
    }).join('');
}