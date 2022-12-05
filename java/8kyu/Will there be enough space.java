// You have to write a function that accepts three parameters:

//     cap is the amount of people the bus can hold excluding the driver.
//     on is the number of people on the bus excluding the driver.
//     wait is the number of people waiting to get on to the bus excluding the driver.

// If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.

// https://www.codewars.com/kata/5875b200d520904a04000003

public class Bob {
  public static int enough(int cap, int on, int wait){
    if(cap < (on+wait)){
      return on+wait-cap;
    }else{
      return 0;
    }
  }
}