// You get any card as an argument. Your task is to return the suit of this card (in lowercase).

// https://www.codewars.com/kata/5a360620f28b82a711000047

function defineSuit(card) {
    if(card.includes("♣")){
      return 'clubs'; 
    }
    if(card.includes("♦")){
      return 'diamonds'; 
    }
    if(card.includes("♥")){
      return 'hearts'; 
    }
    if(card.includes("♠")){
      return 'spades'; 
    }
  }