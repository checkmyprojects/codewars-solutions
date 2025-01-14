// https://www.codewars.com/kata/5f55ecd770692e001484af7d

// Too long, didn't read

// You get a list of integers, and you have to write a function mirror that returns the "mirror" (or symmetric) version of this list: i.e. the middle element is the greatest, then the next greatest on both sides, then the next greatest, and so on...
// More info

// The list will always consist of integers in range -1000..1000 and will vary in size between 0 and 10000. Your function should not mutate the input array, and this will be tested (where applicable). Notice that the returned list will always be of odd size, since there will always be a definitive middle element.

function mirror(data) {
    const sorted = data.slice().sort((a,b) => a - b)
    const sortedInverted = sorted.slice().reverse().slice(1)
    
    return sorted.concat(sortedInverted)
}