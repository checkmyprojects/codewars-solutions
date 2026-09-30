// https://www.codewars.com/kata/59bc0059bf10a498a6000025

// I will give you two strings. I want you to transform stringOne into stringTwo one letter at a time.

// Example:

// stringOne = 'bubble gum';
// stringTwo = 'turtle ham';

// Result:
// bubble gum
// tubble gum
// turble gum
// turtle gum
// turtle hum
// turtle ham

function mutateMyStrings(stringOne, stringTwo){
    var arr1 = stringOne.split('');
    var arr2 = stringTwo.split('');
    var answerString = [arr1.join('')];
    
    for(let i = 0; i < arr1.length; i++) {
        if(arr1[i] !== arr2[i]) {
            arr1[i] = arr2[i];
            answerString.push(arr1.join(''));
        }
    }
    return answerString.join('\n') + '\n';
}