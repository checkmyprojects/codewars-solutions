// https://www.codewars.com/kata/55466644b5d240d1d70000ba



// Your job is to find out how much candy each child has, and give them each additional candy until they too have as much as the child(ren) with the most candy. You also want to keep a total of how much candy you've handed out because reasons."

// Your job is to give all the kids the same amount of candies as the kid with the most candies and then return the total number candies that have been given out. If there are no kids, or only one, return -1. 

function candies(kids){
    if (kids.length < 2) return -1;
    
    var max = Math.max.apply(null, kids);
    var extraCandies = kids.reduce(function (total, kid) {
        return total + max - kid;
    }, 0);
    return extraCandies;
}