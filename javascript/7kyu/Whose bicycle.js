// https://www.codewars.com/kata/5a2cb4bff28b820c33000082

function whoseBicycle(diary1, diary2, diary3) {
    const total1 = Object.values(diary1).reduce((total, currentValue) => total + currentValue);
    const total2 = Object.values(diary2).reduce((total, currentValue) => total + currentValue);
    const total3 = Object.values(diary3).reduce((total, currentValue) => total + currentValue);
  
    if (total1 > total2 && total1 > total3) {
      return 'I need to buy a bicycle for my first son.';
    } else if (total2 >= total1 && total2 > total3) {
      return 'I need to buy a bicycle for my second son.';
    } else if (total3 >= total1 && total3 >= total2) {
      return 'I need to buy a bicycle for my third son.';
    }
  }