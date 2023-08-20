// https://www.codewars.com/kata/570bcd9715944a2c8e000009

function sc(floor) {
    if (floor <= 1) return "";
    var SCREAM = "";
    for (let i = 0; i < floor - 1; i++) {
        SCREAM += "Aa~ ";
    }
    SCREAM += "Pa!";
    if (floor <= 6) SCREAM += " Aa!";
    return SCREAM;
}