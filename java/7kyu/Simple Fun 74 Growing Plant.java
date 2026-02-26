// https://www.codewars.com/kata/58941fec8afa3618c9000184

// Task

// Each day a plant is growing by upSpeed meters. Each night that plant's height decreases by downSpeed meters due to the lack of sun heat. Initially, plant is 0 meters tall. We plant the seed at the beginning of a day. We want to know when the height of the plant will reach a certain level.

public class SimpleFun {
    public static int growingPlant(int upSpeed, int downSpeed, int desiredHeight) {
        int height=upSpeed;
        int c=1;
        while (height<desiredHeight)
        {   
        height+=(upSpeed-downSpeed);
        c++;
        }
        return c;
    }
}