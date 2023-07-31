// https://www.codewars.com/kata/57216d4bcdd71175d6000560

function padIt(str,n){
    while(n>0){
      if(n%2 === 0) {
        str = str + "*";
      }else{
        str = "*" + str;
      }
      n --;
    }
    return str;
  }