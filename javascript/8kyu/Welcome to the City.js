// Create a method sayHello/say_hello/SayHello that takes as input a name, city, and state to welcome a person. Note that name will be an array consisting of one or more values that should be joined together with one space between each, and the length of the name array in test cases will vary.

// Example:

// sayHello(['John', 'Smith'], 'Phoenix', 'Arizona')

// This example will return the string Hello, John Smith! Welcome to Phoenix, Arizona!

// https://www.codewars.com/kata/5302d846be2a9189af0001e4

function sayHello( name, city, state ) {
    name = name.join(" ")
    return `Hello, ${name}! Welcome to ${city}, ${state}!`
}