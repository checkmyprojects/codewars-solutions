// https://www.codewars.com/kata/57202aefe8d6c514300001fd

public class SaleHotdogs{
  public static int saleHotdogs(final int n){
    if(n<5){
      return n*100;
    }else if(n>=5 && n<10){
      return n*95;
    }else{
      return n*90;
    }
  }
}