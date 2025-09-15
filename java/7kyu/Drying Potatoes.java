// https://www.codewars.com/kata/58ce8725c835848ad6000007

// Write function potatoes with

//     int parameter p0 - initial percent of water-
//     int parameter w0 - initial weight -
//     int parameter p1 - final percent of water -

// potatoesshould return the final weight coming out of the oven w1 truncated as an int.

class Potatoes {
    public static int potatoes(int p0, int w0, int p1) {
        return (100 - p0) * w0 / (100 - p1);
    }
}