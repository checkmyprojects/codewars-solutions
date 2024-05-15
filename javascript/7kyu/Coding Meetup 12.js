// https://www.codewars.com/kata/582dace555a1f4d859000058

// You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

function findAdmin(list, lang) {
    return list.filter(function(dev){return dev.language == lang && dev.githubAdmin == 'yes'});
}