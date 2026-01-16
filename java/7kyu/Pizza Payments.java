// https://www.codewars.com/kata/5b043e3886d0752685000009

// Kate and Michael want to buy a pizza and share it. Depending on the price of the pizza, they are going to divide the costs:

//     If the pizza is less than €5,- Michael invites Kate, so Michael pays the full price.
//     Otherwise Kate will contribute 1/3 of the price, but no more than €10 (she's broke :-) and Michael pays the rest.

// How much is Michael going to pay? Calculate the amount with two decimals, if necessary.

public class PizzaPayments {
  public static double michaelPays(double cost) {
  double cost13;
        if (cost < 5) {
            return Math.round(cost * 100.0) / 100.0;
        } else {
            cost13 = cost / 3;
            if (cost13 > 10) {
                return Math.round((cost - 10) * 100.0) / 100.0;
            } else {
                return Math.round((cost - cost13) * 100.0) / 100.0;
            }
        }         
  }
}