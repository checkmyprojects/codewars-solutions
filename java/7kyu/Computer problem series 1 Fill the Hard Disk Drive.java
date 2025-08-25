// https://www.codewars.com/kata/5d49c93d089c6e000ff8428c

// Your task is to determine how many files of the copy queue you will be able to save into your Hard Disk Drive. The files must be saved in the order they appear in the queue.

// Zero size files can always be saved even HD full.
// Input:

//     Array of file sizes (0 <= s <= 100)
//     Capacity of the HD (0 <= c <= 500)

// Output:

//     Number of files that can be fully saved in the HD.

public class Kata {
  public static int save(int[] sizes, int hd) {
    int result = 0;
    int sum = 0;
    for (int i: sizes) {
      if (sum + i > hd) {
        break;
      }
      else {
        sum += i;
        result ++;
      }
    }
    return result;
  }
}