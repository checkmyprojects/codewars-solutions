// https://www.codewars.com/kata/57238ceaef9008adc7000603

function colorOf(r, g, b) {
    let R = r.toString(16)
    let G = g.toString(16)
    let B = b.toString(16)
    
    if (r < 16) R = '0' + R
    if (g < 16) G = '0' + G
    if (b < 16) B = '0' + B
    
    return '#' + R + G + B
}