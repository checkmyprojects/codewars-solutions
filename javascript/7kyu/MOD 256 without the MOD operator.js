// https://www.codewars.com/kata/581e1d083a4820eb4f00004f

function mod256WithoutMod(number)
{
    while (number > 255) number -= 256;
    while (number < -255) number += 256;
    return number;
}