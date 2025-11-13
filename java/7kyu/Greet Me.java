// https://www.codewars.com/kata/535474308bb336c9980006f2

// Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

public class GreetMe{
    public static String greet(String name){
        return "Hello " + name.substring(0,1).toUpperCase() + name.substring(1).toLowerCase() + "!";
    }
}