// https://www.codewars.com/kata/58811e9cfd05cb5aed0000a4

// Write a function to calculate the centroid of 3D coordinates.

// Return the results as a list of 3 floats.

function centroid(arr) {
    return arr.reduce((a,c)=> {
        a[0] += c[0]/arr.length;
        a[1] += c[1]/arr.length;
        a[2] += c[2]/arr.length;
        return a
    },[0,0,0])
    .map( e => Math.round( e * 100 ) / 100);
}