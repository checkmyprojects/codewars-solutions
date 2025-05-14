// https://www.codewars.com/kata/54f9c37106098647f400080a

// Your task is to implement the dropWhile function. If you've got a span function lying around, this is a one-liner! Alternatively, if you have a takeWhile function on your hands, then combined with the dropWhile function, you can implement the span function in one line. This is the beauty of functional programming: there are a whole host of useful functions, many of which can be implemented in terms of each other.

function dropWhile(arr, pred) {
    for (var i = 0; i < arr.length && pred(arr[i]); ++i) ;
    return arr.slice(i)
}