// https://www.codewars.com/kata/5aee86c5783bb432cd000018

// Welcome to the Codewars Bar!

// Codewars Bar recommends you drink 1 glass of water per standard drink so you're not hungover tomorrow morning.

// Your fellow coders have bought you several drinks tonight in the form of a string. Return a string suggesting how many glasses of water you should drink to not be hungover.

public class Drinkin {

    public String hydrate(String drinkString) {
      int n = 0;
      for (String word : drinkString.split(" ")) {
        try { n += Integer.valueOf(word); } catch (NumberFormatException ex) { }
      }
      return String.format("%d glass%s of water", n, n==1?"":"es");
    }
    
}