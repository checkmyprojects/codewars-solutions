// https://www.codewars.com/kata/53573877d5493b4d6e00050c

// Complete the method that takes a sequence of objects with two keys each: country or state, and capital. Keys may be symbols or strings.

// The method should return an array of sentences declaring the state or country and its capital.

function capital(capitals) {
    return capitals.map(function(e) {
      return 'The capital of ' + (e.state || e.country) + ' is ' + e.capital
    })
}