// https://www.codewars.com/kata/5648b12ce68d9daa6b000099

import java.util.List;

class Metro {
  int countPassengers(List<int[]> stops) {
    return stops.stream().mapToInt(x -> x[0] - x[1]).sum();
  }
}