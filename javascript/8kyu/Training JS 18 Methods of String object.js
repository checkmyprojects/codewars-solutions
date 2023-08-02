// https://www.codewars.com/kata/57280481e8118511f7000ffa

function splitAndMerge(str, sp) {
    return str.split(" ").map(word => word.split("").join(sp)).join(" ");
}