// https://www.codewars.com/kata/55486cb94c9d3251560000ff

// We all use 16:9, 16:10, 4:3 etc. ratios every day. Main task is to determine image ratio by its width and height dimensions.

// Function should take width and height of an image and return a ratio string (ex."16:9"). If any of width or height entry is 0 function should throw an exception (or return Nothing).

function calculateRatio(w, h) {
    if (!w || !h) throw new Error()
    var r = gcd(w, h);
    return (w / r) + ':' + (h / r)
}

function gcd(a, b) {
    if (b === 0) return a
    return gcd(b, a % b)
}