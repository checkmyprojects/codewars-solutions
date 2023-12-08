// https://www.codewars.com/kata/582746fa14b3892727000c4f

// You will be given an array of objects (hashes in ruby) representing data about developers who have signed up to attend the coding meetup that you are organising for the first time.

// Your task is to return the number of JavaScript developers coming from Europe.

function countDevelopers(list) {
    var count = 0;
    for (let i = 0; i < list.length; i++)  {
        if (list[i].continent === "Europe" && list[i].language === "JavaScript")  {
            count++;
        }
    }
    return count;
}