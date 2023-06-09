// https://www.codewars.com/kata/5720a1cb65a504fdff0003e2

function differenceInAges (ages) {

    let max = Math.max(...ages),
        min = Math.min(...ages)
        diff = max - min
        
    return [min, max, diff]
}