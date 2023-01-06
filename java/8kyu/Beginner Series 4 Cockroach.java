// The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

// https://www.codewars.com/kata/55fab1ffda3e2e44f00000c6

public class Cockroach{
  public int cockroachSpeed(double x){
   return (int) Math.floor(x*100000/60/60);
  }
}