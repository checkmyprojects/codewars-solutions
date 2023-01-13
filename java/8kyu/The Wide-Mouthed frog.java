// Your goal in this kata is to create complete the mouth_size method this method takes one argument animal which corresponds to the animal encountered by the frog. If this one is an alligator (case-insensitive) return small otherwise return wide.

// https://www.codewars.com/kata/57ec8bd8f670e9a47a000f89

public class WideMouthedFrog{
  public static String mouthSize(String animal){
   if(animal.toLowerCase().equals("alligator")){
     return "small";
   }else{
     return "wide";
   }
  }
}