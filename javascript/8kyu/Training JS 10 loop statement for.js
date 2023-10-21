// https://www.codewars.com/kata/5721a78c283129e416000999

function pickIt (arr) {

    let odd = []
    let even =[]
        
    for (var x of arr) {
        ((x % 2) ? odd : even).push(x)    
    }
        
    return [odd, even]
}