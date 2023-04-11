// https://www.codewars.com/kata/5601c5f6ba804403c7000004

function barTriang(p1, p2, p3){
    let res = [];
    res[0] = Math.round((p1[0]+p2[0]+p3[0])/3*10000)/10000;
    res[1] = Math.round((p1[1]+p2[1]+p3[1])/3*10000)/10000;
    return res;
  }