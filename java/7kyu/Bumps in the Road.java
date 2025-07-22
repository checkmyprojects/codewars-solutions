// https://www.codewars.com/kata/57ed30dde7728215300005fa

// Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.

// Unfortunately for you, your drive is very bumpy! Given a string showing either flat road (_) or bumps (n). If you are able to reach home safely by encountering 15 bumps or less, return Woohoo!, otherwise return Car Dead

public class BumpsTheRoad {
  public static String bumps(final String road) {
    return road.chars().filter(ch -> ch =='n').count()>15? "Car Dead" : "Woohoo!";
  }
}