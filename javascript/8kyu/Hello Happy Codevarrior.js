// https://www.codewars.com/kata/53f9ee9f64b19d4b1d0001ed

function Warrior(n){
    let name = n;  
    this.name = function(n){
        if( n ) name=n;
        return name;
    }
}
    
Warrior.prototype.toString = function(){
    return "Hi! my name's "+this.name();
}