// https://www.codewars.com/kata/55c933c115a8c426ac000082

// Oh no! Timmy's evalObject function doesn't work. He uses Switch/Cases to evaluate the given properties of an object, can you fix timmy's function? 

function evalObject(value){
    switch(value.operation){
        case'+': return value.a + value.b;
        case'-': return value.a - value.b;
        case'/': return value.a / value.b;
        case'*': return value.a * value.b;
        case'%': return value.a % value.b;
        case'^': return Math.pow(value.a, value.b);
    }
}