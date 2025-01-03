// https://www.codewars.com/kata/58ce8725c835848ad6000007

// Write function potatoes with

//     int parameter p0 - initial percent of water-
//     int parameter w0 - initial weight -
//     int parameter p1 - final percent of water -

// potatoesshould return the final weight coming out of the oven w1 truncated as an int.

function potatoes(p0, w0, p1) {
    let inicialWater = ((p0/100) * w0).toFixed(2);
    let finalWater = ((p1/100)*w0).toFixed(2);
    let dryMatterDiference = (1 - (p1/100)).toFixed(2);
    let weightLoss = ((inicialWater - finalWater)/dryMatterDiference).toFixed(2);
    return Math.floor(w0 - weightLoss)
}