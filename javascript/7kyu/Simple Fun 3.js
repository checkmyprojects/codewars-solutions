// https://www.codewars.com/kata/588422ba4e8efb583d00007d

// One night you go for a ride on your motorcycle. At 00:00 you start your engine, and the built-in timer automatically begins counting the length of your ride, in minutes. Off you go to explore the neighborhood.

// When you finally decide to head back, you realize there's a chance the bridges on your route home are up, leaving you stranded! Unfortunately, you don't have your watch on you and don't know what time it is. All you know thanks to the bike's timer is that n minutes have passed since 00:00.

// Using the bike's timer, calculate the current time. Return an answer as the sum of digits that the digital timer in the format hh:mm would show.

function lateRide(n) {
    let hh = Math.floor(n/60);
    let mm = (n % 60);
    let m1 = Math.floor(mm/10);
    let m2 = (mm % 10);  
    let h1 = Math.floor(hh/10);
    let h2 = (hh % 10);
    return h1 + h2 + m1 + m2;
}