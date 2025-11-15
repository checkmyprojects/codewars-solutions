// https://www.codewars.com/kata/562f91ff6a8b77dfe900006e

public class Movie {
    
    public static int movie(int card, int ticket, double perc) {
        int count = 0;
        double totalB = card;
        
        while (ticket * count <= Math.ceil(totalB)) totalB += ticket * Math.pow(perc, ++count);

        return count;
    }
}