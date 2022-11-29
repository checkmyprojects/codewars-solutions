// Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()

// https://www.codewars.com/kata/5ae62fcf252e66d44d00008e

public class Kata
{
    public static int expressionsMatter(int a, int b, int c)
    {
       return Math.max(Math.max(a + b + c, a * b * c), Math.max((a + b) * c, a * (b + c)));
    }
}