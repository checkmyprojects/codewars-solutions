// https://www.codewars.com/kata/540de1f0716ab384b4000828

// You must create a function, spread, that takes a function and a list of arguments to be applied to that function. You must make this function return the result of calling the given function/lambda with the given arguments.

// spread(someFunction, [1, true, "Foo", "bar"] ) 
// // is the same as...
// someFunction(1, true, "Foo", "bar")

function spread(func, args) {
    return func.apply(null, args);
}