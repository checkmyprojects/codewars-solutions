// Expected Behaviour

// Function should return a dictionary/Object/Hash with "status" as a key, whose value can : "busy" or "available" depending on the truth value of the argument is_busy.

// https://www.codewars.com/kata/54fdaa4a50f167b5c000005f

import java.util.HashMap;

public class Kata {

    public static HashMap <String, String> getStatus(boolean isBusy) {
        HashMap<String, String> status = new HashMap<String,String>();
      
        if (isBusy) {
          status.put("status" , "busy");
        } else {
          status.put("status" , "available");
        }

        return status;
    }
  
}