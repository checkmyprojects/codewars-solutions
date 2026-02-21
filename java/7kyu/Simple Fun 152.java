// https://www.codewars.com/kata/58acfe4ae0201e1708000075

public class Kata {
    public static boolean inviteMoreWomen(int[] l) {
       int w=0 , m=0;
        for (int i : l) {
			if (i == -1) w++;
			else if(i == 1) m++;
		}
        if(w>=m) return false;
        else return true;
    }
}