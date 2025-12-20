// https://www.codewars.com/kata/5b16490986b6d336c900007d

// You are given a dictionary/hash/object containing some languages and your test results in the given languages. Return the list of languages where your test score is at least 60, in descending order of the scores.

// Note: the scores will always be unique (so no duplicate values)

package com.codewars.anter69;
import java.util.stream.Collectors;
import java.util.*;

public class MyLanguages {
  public static List<String> myLanguages(final Map<String, Integer> results) {
    return results.entrySet()
                  .stream()
                  .filter( me -> me.getValue() >= 60 )
                  .sorted( (m1,m2) -> Integer.compare(m2.getValue(),m1.getValue()) )
                  .map( me -> me.getKey() )
                  .collect(Collectors.toList());
  }
}
