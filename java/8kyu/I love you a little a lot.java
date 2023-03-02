// Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

//     I love you
//     a little
//     a lot
//     passionately
//     madly
//     not at all

// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

// Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.

// https://www.codewars.com/kata/57f24e6a18e9fad8eb000296

public class Sid {
    public static String howMuchILoveYou(int nb_petals) {
    
    int petals = nb_petals %6;
    if(petals == 1){
      return "I love you";
    }else if(petals == 2){
      return "a little";
    }else if(petals == 3){
      return "a lot";
    }else if(petals == 4){
      return "passionately";
    }else if(petals == 5){
      return "madly";
    }
      return "not at all";
    }
}