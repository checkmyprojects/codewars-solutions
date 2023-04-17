// https://www.codewars.com/kata/56c5847f27be2c3db20009c3

import java.util.HashMap;

public class Kata {
    public static String subtractSum(int n) {

        HashMap<Integer, String> map = new HashMap<Integer, String>() {{
            put(1, "kiwi");
            put(2, "pear");
            put(3, "kiwi");
            put(4, "banana");
            put(5, "melon");
            put(6, "banana");
            put(7, "melon");
            put(8, "pineapple");
            put(9, "apple");
            put(10, "pineapple");
            put(11, "cucumber");
            put(12, "pineapple");
            put(13, "cucumber");
            put(14, "orange");
            put(15, "grape");
            put(16, "orange");
            put(17, "grape");
            put(18, "apple");
            put(19, "grape");
            put(20, "cherry");
            put(21, "pear");
            put(22, "cherry");
            put(23, "pear");
            put(24, "kiwi");
            put(25, "banana");
            put(26, "kiwi");
            put(27, "apple");
            put(28, "melon");
            put(29, "banana");
            put(30, "melon");
            put(31, "pineapple");
            put(32, "melon");
            put(33, "pineapple");
            put(34, "cucumber");
            put(35, "orange");
            put(36, "apple");
            put(37, "orange");
            put(38, "grape");
            put(39, "orange");
            put(40, "grape");
            put(41, "cherry");
            put(42, "pear");
            put(43, "cherry");
            put(44, "pear");
            put(45, "apple");
            put(46, "pear");
            put(47, "kiwi");
            put(48, "banana");
            put(49, "kiwi");
            put(50, "banana");
            put(51, "melon");
            put(52, "pineapple");
            put(53, "melon");
            put(54, "apple");
            put(55, "cucumber");
            put(56, "pineapple");
            put(57, "cucumber");
            put(58, "orange");
            put(59, "cucumber");
            put(60, "orange");
            put(61, "grape");
            put(62, "cherry");
            put(63, "apple");
            put(64, "cherry");
            put(65, "pear");
            put(66, "cherry");
            put(67, "pear");
            put(68, "kiwi");
            put(69, "pear");
            put(70, "kiwi");
            put(71, "banana");
            put(72, "apple");
            put(73, "banana");
            put(74, "melon");
            put(75, "pineapple");
            put(76, "melon");
            put(77, "pineapple");
            put(78, "cucumber");
            put(79, "pineapple");
            put(80, "cucumber");
            put(81, "apple");
            put(82, "grape");
            put(83, "orange");
            put(84, "grape");
            put(85, "cherry");
            put(86, "grape");
            put(87, "cherry");
            put(88, "pear");
            put(89, "cherry");
            put(90, "apple");
            put(91, "kiwi");
            put(92, "banana");
            put(93, "kiwi");
            put(94, "banana");
            put(95, "melon");
            put(96, "banana");
            put(97, "melon");
            put(98, "pineapple");
            put(99, "apple");
            put(100, "pineapple");
        }};

        int value = n;
        String fruit;

        do {
            value = value - String.valueOf(value).chars().map(Character::getNumericValue).sum();
            fruit = map.get(value);
        }
        while (fruit == null && value > 0 );

        return fruit;

    }
}