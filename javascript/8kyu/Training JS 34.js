// https://www.codewars.com/kata/5733f948d780e27df6000e33

function cutCube(volume,n){
    return !(Math.cbrt(n) % 1) && !(Math.cbrt(volume / n) % 1);
}