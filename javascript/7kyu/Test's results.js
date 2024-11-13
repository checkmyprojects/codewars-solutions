// https://www.codewars.com/kata/599db0a227ca9f294b0000c8

// It's important day today: the class has just had a math test. You will be given a list of marks. Complete the function that will:

//     Calculate the average mark of the whole class and round it to 3 decimal places.
//     Make a dictionary/hash with keys "h", "a", "l" to make clear how many high, average and low marks they got. High marks are 9 & 10, average marks are 7 & 8, and low marks are 1 to 6.
//     Return list [class_average, dictionary] if there are different type of marks, or [class_average, dictionary, "They did well"] if there are only high marks.

function testResult(array) {
    let avg = (array.reduce((a,b) => a + b) / array.length).toFixed(3)
    let h = array.filter(a => a > 8).length
    let l = array.filter(b => b < 7).length
    let a = array.filter(c => c > 6 && c < 9).length
    let result = [Number(avg), {'h': h, 'a': a, 'l': l }]
    return (l == 0 && a == 0 && h !== 0) ? result.concat(['They did well']) : result
}