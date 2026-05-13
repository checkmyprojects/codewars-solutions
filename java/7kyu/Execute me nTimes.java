// https://www.codewars.com/kata/5b2b4836b6989d207700005b

// You're given a procedure / method that executes a passed action n times, but it does so in a purely sequential manner. If you inspect the sample tests, you'll find that the action takes about 1 second to complete, and this action is repeated 20 times which results in a timeout.

// Find a way to execute the action n times in parallel, such that the sample tests complete under the 12 second time limit imposed by Codewars. The submission tests will also test for similar scenarios.

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

public class Worker {

  public void execute(Runnable action, int nTimes) {
  
    for (int i = 0; i<nTimes; i++){
      (new Thread(action)).start();
      }
    while(Thread.activeCount() > 1) {}
  }
  
}