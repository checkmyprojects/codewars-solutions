

import java.util.Arrays;

public class StringPacket {
    
    public static String communicationModule(String packet) {
      String tokens[] = packet.split("(?<=\\G.{4})");
      int result = 0;
      switch(tokens[1]){
        case "0F12" : result = Integer.parseInt(tokens[2]) + Integer.parseInt(tokens[3]);
          break;
        case "B7A2" : result = Integer.parseInt(tokens[2]) - Integer.parseInt(tokens[3]);
          break;
        case "C3D9" : result = Integer.parseInt(tokens[2]) * Integer.parseInt(tokens[3]);
          break;
      }

      if (result < 0) result = 0;
      if (result > 9999) result = 9999;
      
      tokens[1] = "FFFF";
      tokens[3] = "0000";
      tokens[2] = String.format("%04d", result);
;
      
      return tokens[0] + tokens[1] + tokens[2] + tokens[3] + tokens[4];
    }
    
}