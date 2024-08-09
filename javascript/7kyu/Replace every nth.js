// https://www.codewars.com/kata/57fcaed83206fb15fd00027a

// Write a method, that replaces every nth char oldValue with char newValue.

function replaceNth(text, n, oldValue, newValue) {
    const array = text.split("");
    let counter = 1;
    
    for(let i = 0; i < array.length; i++){
        if(array[i] == oldValue && counter == n){
            array[i] = newValue;
            counter = 1;
        }
        if(array[i] == oldValue && counter != n){
            counter++;
        }
    }
    
    return array.join("");
}