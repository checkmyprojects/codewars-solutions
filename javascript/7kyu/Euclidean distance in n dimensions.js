// https://www.codewars.com/kata/595877be60d17855980013d3

// Implement a function to calculate the distance between two points in n-dimensional space. The two points will be passed to your function as arrays of the same length.

function euclideanDistance(point1, point2) {
    const powerSummation = point1.
        reduce((accumulator, currentValue, currentIndex) => {
            const p2 = point2[currentIndex]
            const remainder = currentValue - p2
            const remainderPowerTwo = Math.pow(remainder, 2)

            return accumulator + remainderPowerTwo;        
        },0);

    const sqrtOfSummation = Math.sqrt(powerSummation)

    return sqrtOfSummation
}