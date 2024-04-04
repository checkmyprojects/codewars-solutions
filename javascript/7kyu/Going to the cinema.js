// https://www.codewars.com/kata/562f91ff6a8b77dfe900006e

function movie(card, ticket, perc) {
    var costA = n = 0,
        costB = card;
    while (Math.ceil(costB) >= costA) {
        costA += ticket;
        costB += ticket * Math.pow(perc,++n);
    }
    return n;
};