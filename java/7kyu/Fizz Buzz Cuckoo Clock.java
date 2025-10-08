// https://www.codewars.com/kata/58485a43d750d23bad0000e6

public class FizzBuzzCuckooClock {
    public static String fizzBuzzCuckooClock(String time) {
        final String parts [] = time.split(":");
        final int hr = Integer.valueOf(parts[0]);
        final int min = Integer.valueOf(parts[1]);
        final int cuckooCount = min==0 ? hr%12==0?12:hr%12 : min==30 ? 1 : 0;
        if (cuckooCount > 0) {         
          String cuckoos = "";
          for (int i=0; i< cuckooCount; i++) {
            cuckoos += "Cuckoo ";
          }
          return cuckoos.trim();
        }
        return min%15==0 ? "Fizz Buzz" : min%5==0 ? "Buzz" : min%3==0 ? "Fizz" : "tick";
    }
}