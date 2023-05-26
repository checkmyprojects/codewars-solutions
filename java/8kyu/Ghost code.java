// https://www.codewars.com/kata/570184a95594a091150000a0

public class GhostCode{
  public static String helloName(final String name){
    if(name == null || name.equals(""))
      return "Hello world!";
    else
      return "Hello my name is " + name;
  }
}