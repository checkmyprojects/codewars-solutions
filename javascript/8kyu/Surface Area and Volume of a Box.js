// Write a function that returns the total surface area and volume of a box as an array: [area, volume]

// https://www.codewars.com/kata/565f5825379664a26b00007c

function getSize(width, height, depth){
    return [(depth * width + depth * height + width * height) * 2,
    width * height * depth]
}