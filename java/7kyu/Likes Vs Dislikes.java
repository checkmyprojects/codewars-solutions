// https://www.codewars.com/kata/62ad72443809a4006998218a

// Create a function that takes in a list of button inputs and returns the final state.

import preloaded.Button;
import static preloaded.Button.*; // Like, Dislike, Nothing

class Solution {
    static Button likeOrDislike(Button[] buttons) {
        Button state = Nothing;
        for (Button button : buttons) {
            state = (state == button) ? Nothing : button;
        }
        return state;
    }
}