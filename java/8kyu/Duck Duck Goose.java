// Given an array of Player objects (an array of associative arrays in PHP) and an index (1-based), return the name of the chosen Player(name is a property of Player objects, e.g Player.name)

// https://www.codewars.com/kata/582e0e592029ea10530009ce

class Kata {
    static String duckDuckGoose(final Player[] players, final int goose) {
        final int index = (goose - 1) % players.length;
        return players[index].name;
    }
}