// https://www.codewars.com/kata/5a4d303f880385399b000001

// Strong number is a number with the sum of the factorial of its digits is equal to the number itself.

// For example, 145 is strong, because 1! + 4! + 5! = 1 + 24 + 120 = 145.
// Task

// Given a positive number, find if it is strong or not, and return either "STRONG!!!!" or "Not Strong !!".

class StrongNumber {
    
    public static String isStrongNumber(int num) {
        int sum = 0, n = num;
        for(; n>0; n/=10)
            sum += factorial(n%10);
        
        if(sum == num)
            return "STRONG!!!!";
        else
            return "Not Strong !!";
    }
    
    private static int factorial(int number){
        int sum = 1;
        for(int i=1; i<=number; i++)  
            sum *= i;
        return sum;
    }

}