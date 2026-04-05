// https://www.codewars.com/kata/555eded1ad94b00403000071

public class NthSeries {
	
	public static String seriesSum(int n) {
		
    double sum = 0.0;
    for (int i = 0; i < n; i++)
      sum += 1.0 / (1 + 3 * i);
    
    return String.format("%.2f", sum);
    
	}
}