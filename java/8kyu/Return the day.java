// Complete the function which returns the weekday according to the input number:

//     1 returns "Sunday"
//     2 returns "Monday"
//     3 returns "Tuesday"
//     4 returns "Wednesday"
//     5 returns "Thursday"
//     6 returns "Friday"
//     7 returns "Saturday"
//     Otherwise returns "Wrong, please enter a number between 1 and 7"

// https://www.codewars.com/kata/59dd3ccdded72fc78b000b25

public class DayOfWeek {

    public static String getDay(int n) {
        String message = "Wrong, please enter a number between 1 and 7";
        if(n == 1){
            message = "Sunday";
        }else if(n == 2){
            message = "Monday";
        }else if(n == 3){
            message = "Tuesday";
        }else if(n == 4){
            message = "Wednesday";
        }else if(n == 5){
            message = "Thursday";
        }else if(n == 6){
            message = "Friday";
        }else if(n == 7){
            message = "Saturday";
        }
        return message;
    }
  
}