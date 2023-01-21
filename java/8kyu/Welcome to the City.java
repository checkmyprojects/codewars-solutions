// Create a method sayHello/say_hello/SayHello that takes as input a name, city, and state to welcome a person. Note that name will be an array consisting of one or more values that should be joined together with one space between each, and the length of the name array in test cases will vary.

// Example:

// sayHello(new String[]{"John", "Smith"}, "Phoenix", "Arizona")

// This example will return the string Hello, John Smith! Welcome to Phoenix, Arizona!

// https://www.codewars.com/kata/5302d846be2a9189af0001e4

public class Hello{
  public String sayHello(String [] name, String city, String state){
    String fullName = String.join(" ", name);
    return "Hello, " + fullName + "! Welcome to " + city + ", " + state +"!";
  }
}