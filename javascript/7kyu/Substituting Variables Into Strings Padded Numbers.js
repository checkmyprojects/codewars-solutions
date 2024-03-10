// https://www.codewars.com/kata/51c89385ee245d7ddf000001

// Complete the solution so that it returns a formatted string. The return value should equal "Value is VALUE" where value is a 5 digit padded number. 

function solution(value){
    return "Value is " + ("00000" + value).slice(-5);
}