// https://www.codewars.com/kata/55955a48a4e9c1a77500005a

// Write a function to greet a person. Function will take name as input and greet the person by saying hello. Return null/nil/None if input is empty string or null/nil/None.

function greet(name) {
    if (name=="" || name==null) 
        return null ;
    else 
        return "hello "+name+"!";
}