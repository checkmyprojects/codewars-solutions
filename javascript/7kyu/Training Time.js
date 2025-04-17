// https://www.codewars.com/kata/572ab0cfa3af384df7000ff8

// Create a function shuffleIt. The function accepts two or more parameters. The first parameter arr is an array of numbers, followed by an arbitrary number of numeric arrays. Each numeric array contains two numbers, which are indices for elements in arr (the numbers will always be within bounds). For every such array, swap the elements. Try to use all your new skills: arrow functions, the spread operator, destructuring, and rest parameters.

function shuffleIt(arr, ...swapArr){
    for(let i = 0; i < swapArr.length; i++) {
        let firstNum = swapArr[i][0];
        let secondNum = swapArr[i][1];
        [arr[firstNum], arr[secondNum]] = [arr[secondNum], arr[firstNum]];
    }
    return arr;
}