// https://www.codewars.com/kata/5701800886306a876a001031

// Suzuki needs help lining up his students!

// Today Suzuki will be interviewing his students to ensure they are progressing in their training. He decided to schedule the interviews based on the length of the students name in descending order. The students will line up and wait for their turn.

// You will be given a string of student names. Sort them and return a list of names in descending order.

function lineupStudents(students){
    return students
        .trim()
        .split(/\s+/)
        .sort((a, b) => b.length - a.length || b.localeCompare(a));
}