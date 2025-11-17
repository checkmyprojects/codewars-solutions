// https://www.codewars.com/kata/5668e3800636a6cd6a000018

// Oh no! Ghosts have reportedly swarmed the city. It's your job to get rid of them and save the day!

// In this kata, strings represent buildings while whitespaces within those strings represent ghosts.

// So what are you waiting for? Return the building(string) without any ghosts(whitespaces)!

public class Ghostbusters {
  
  public static String ghostBusters(String building) {
    if(!building.contains(" ")) return "You just wanted my autograph didn't you?";
    else return building.replaceAll(" ", "");
  }
}