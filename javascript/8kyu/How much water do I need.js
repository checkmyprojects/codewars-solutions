// https://www.codewars.com/kata/575fa9afee048b293e000287

// Write a function howMuchWater (JS)/how_much_water (Python and Ruby) to work out how much water is needed if you have a clothes amount of clothes. The function will accept 3 arguments: - water, load (or max_loadin Ruby) and clothes.

// My washing machine is an old model that can only handle double the amount of load (or max_load). If the amount of clothes is more than 2 times the standard amount of load (max_load), return 'Too much clothes'. The washing machine also cannot handle any amount of clothes less than load (max_load). If that is the case, return 'Not enough clothes'.

// The answer should be rounded to the nearest 2 decimal places.

// For example, if the load is 10, the amount of water it requires is 5 and the amount of clothes to wash is 14, then you need 5 * 1.1 ^ (14 - 10) amount of water.

function howMuchWater(water, load, clothes){
    if (clothes >= 2*load){
        return 'Too much clothes'
    } else if (clothes < load){
        return 'Not enough clothes'
    } else {
        return Number((water * Math.pow(1.1, clothes - load)).toFixed(2))
    }
}