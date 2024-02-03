// https://www.codewars.com/kata/57a6633153ba33189e000074

// Count the number of occurrences of each character and return it as a (list of tuples) in order of appearance. For empty output return (an empty list).

const orderedCount = function (text) {
    const counts = new Map()
    for (const char of text) {
      const currentCount = counts.get(char) ?? 0
      counts.set(char, currentCount + 1)
    }
    return Array.from(counts)
}