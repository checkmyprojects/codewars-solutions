// https://www.codewars.com/kata/5721c189cdd71194c1000b9b

function grabDoll(dolls){
    var bag=[], doll;
    for( doll of dolls ){
        if( doll == "Hello Kitty" || doll == "Barbie doll" ) bag.push(doll)
        else continue
        if( bag.length > 2 ) break
    }
    return bag;
}