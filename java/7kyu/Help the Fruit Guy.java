// https://www.codewars.com/kata/557af4c6169ac832300000ba

// Our fruit guy has a bag of fruit (represented as an array of strings) where some fruits are rotten. He wants to replace all the rotten pieces of fruit with fresh ones. For example, given ["apple","rottenBanana","apple"] the replaced array should be ["apple","banana","apple"]. Your task is to implement a method that accepts an array of strings containing fruits should returns an array of strings where all the rotten fruits are replaced by good ones. 

public class FruitGuy{
 
 public static String[] removeRotten(String[] fruitBasket) {
   if(fruitBasket == null || fruitBasket.length <= 0) return new String[0];
   
   for(int i = 0; i < fruitBasket.length; i++)
     fruitBasket[i] = fruitBasket[i].replaceAll("rotten", "").toLowerCase();
     
   return fruitBasket;
 }

}